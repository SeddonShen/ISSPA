# Navigation

<a style="display: none;" rel="me" href="https://fosstodon.org/@readthedocs">Mastodon</a>

## Preface

The navigation module is a key part of self-driving vehicles, guiding the vehicle from one point to another. It has important tasks like figuring out the best overall route (global path planning), planning short-term moves (local path planning), and controlling how the vehicle actually moves.

For the navigation module to work, it gets information like where the vehicle is (localization) and detailed maps. Then, it decides on important details, like how fast the vehicle should go and how it should turn. These decisions are then sent to the control module, which makes the vehicle move accordingly.

In practical terms, the planning part of the navigation module has two jobs. First, the global path planning decides the best way to go from where the vehicle is to where it needs to be. Second, the local planning comes up with short-term plans for the vehicle to follow in real-time, especially when there are unexpected things in the way.

Within the field of control systems, mature algorithms such as PID (Proportional-Integral-Derivative) and LQR (Linear Quadratic Regulator) have reached an advanced stage of development. In PAVs, the implementation of PID control has been integrated and embedded into an MCU control board to ensure responsiveness and meet real-time operational requirements.

## List of Navigation Algorithms

ISSPA has deployed one or several benchmark algorithms for both planning and control tasks within the Navigation module. For planning, it predominantly relies on the technology path provided by the ROS Navigation stack, while the control aspect incorporates the classic PID control algorithm flashed onto the development board.

Here is the algorithmic breakdown for each task implementation:


| Planning (ROS Navigation Stack) |        | Control |
|---------------------------------|--------|---------|
| **Global Planner**              | **Local Planner** | **PID** |
| A*                              | TEB    | ...     |
| D*                              | DWA    | ...     |
| PSO                             | ...    | ...     |

In the following parts, we will discuss more details of these tasks.

## Planning

ISSPA employs the ROS navigation stack to execute Planning tasks. The ROS Navigation Stack is a comprehensive planning framework in robotic research, serving as a sophisticated navigation solution. Comprising an array of algorithms and modules, it empowers robots to autonomously traverse their environment while avoiding obstacles. This stack incorporates fundamental components such as localization, mapping, and path planning, providing a holistic solution for robotic navigation challenges.

In the ISSPA, we employ a set of foundational algorithms, encompassing both baseline methods and advanced global and 
local planning strategies. Notable global planning algorithms like D* and A* are utilized to delineate optimal routes, 
while local planning algorithms such as TEB and DWA contribute to nuanced and adaptive trajectory planning. 
To enhance user-friendliness, each algorithm is accompanied by its dedicated parameter file, simplifying the process of swiftly optimizing parameters.

![Indoor Navigation example](./imgs/indoor_navigation_demo.png)

*Indoor Navigation example*

The figure above shows a test of the navigation algorithm in a lab environment, where the green lines are the trajectories generated by global planning (D*), the blue lines are the trajectories generated by the local planning (TEB), and the colored dots surrounding the vicinity of the vehicle are the return points of the 3D LiDAR.

## Control

Within the control module, we seamlessly integrate the Proportional-Integral-Derivative (PID) algorithm into the Microcontroller Unit (MCU). The PID algorithm, renowned for its classical simplicity and ease of implementation, takes center stage in governing the control dynamics of the system.

![PID block diagram](./imgs/PID_wiki.png)

[PID block diagram](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller)

The figure shows the block diagram of a PID controller in a feedback loop, where $r(t)$ is the desired process variable (PV) or setpoint (SP), and $y(t)$ is the measured PV.

In ISSPA, the PID control variable can encompass `angular velocity`, `linear velocity`, etc.

## Inputs & Outputs

Within this section, we aim to present the inputs and outputs of different planning and control algorithms. This endeavor is intended to offer you a comprehensive reference and insight into these algorithms.

| Algo       | Type            | Inputs                                      | Outputs                                   |
|------------|-----------------|---------------------------------------------|-------------------------------------------|
| A* / D* / PSO | Global Planner | a. Start and Goal Positions<br>b. Map information | Planned global path(route)               |
| DWA / TEB  | Local Planner   | a. Global path<br>b. Map information<br>c. Robot's Dynamics and Constraints | a. Planned local trajectory<br>b. Linear velocity and angular velocity |
| PID        | Controller      | a. Expected linear and angular velocity<br>b. Current linear and angular velocity | a. Motor speed control: PWM value<br>b. Yaw control: Angular velocity |

## Global Planner

In ROS Navigation Stack, D* (D-star) and A* (A-star) algorithms are primarily used for global path planning.

Their inputs generally involve:
- **Start and Goal Positions** -- Which describe the robot's initial position (coordinates) and the target destination it intends to reach.
- **Map information** -- Typically represented as a grid map or similar format indicating traversable areas, obstacles, and other terrain information in the robot's environment.

Their outputs generally involve:
- **Planned global path(route)** -- The primary output involves a computed path from the starting point to the goal location, accounting for the map information and obstacle avoidance strategies implemented by these algorithms.

## Local Planner

In ROS Navigation Stack, TEB (Timed Elastic Band) and DWA (Dynamic Window Approach) algorithms are primarily used for local trajectory planning.

Their inputs generally involve:
- **Planned global path** -- Path or trajectory obtained from the global planner.
- **Local Map Information** -- Typically represented as a local grid map.
- **Robot's Kinematic and Dynamic Constraints** -- Information about the vehicle's physical limits, e.g., maximum speed, acceleration, and other kinematic constraints.

Their outputs generally involve:
- **Planned local trajectory** -- Trajectory that considering the dynamic constraints and local map information, ensuring collision avoidance and kinematic feasibility.
- **Vehicle linear and angular velocity** -- Velocity commands that sent to control task to control the vehicle.

## Controller

In control tasks, PID is a classical method.

Its inputs are:
- **Expected vehicle linear and angular velocity** -- Vehicle linear and angular velocity that provided by `Local planner`.
- **Current Vehicle linear and angular velocity**.

Its outputs are:
- **Motor speed control** -- PWM value.
- **Yaw control** -- Angular velocity.

## Reference

- [ros navigation stack ROS wiki](https://wiki.ros.org/navigation).
- [move_base ROS wiki](https://wiki.ros.org/move_base).
- [global_planner ROS wiki](https://wiki.ros.org/global_planner).
- [PSO_global_planner GitHub](https://github.com/JZX-MY/pso_global_planner).
- [dwa_local_planner ROS wiki](https://wiki.ros.org/dwa_local_planner).
- [teb_local_planner ROS wiki](https://wiki.ros.org/teb_local_planner).
- [PID wiki](https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller).