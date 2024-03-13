# PAVS User Manual

The full name of PAVS is **Physical Agents Vehicle Small**, which is a small vehicle for indoor environments, and its basic use will be described in the following document.

- Start the Vehicle Chassis and Sensors
- Start the SLAM Program
- Start the Navigation Program

First, the model diagram of the vehicle is shown below:

![PAVS Structure](./imgs/pavs_structure.jpg)
*Model Diagram of PAV-S*

## Connection Methods

There are many ways to connect to a vehicle's internal port, such as through `VNC viewer`, `SSH`, `Jupyter Notebook`, etc., or connecting a monitor plugged into the vehicle will work.

When first familiarizing yourself with the vehicle software framework, we recommend that you use a monitor plugged into the on-board computing board (e.g., NVIDIA Computer's HDMI connector), which provides a visual interface for familiarizing yourself with the internal operating system.

::: note
Reserve at least one USB port for the keyboard and mouse kit, which can help you with wireless network configuration and so on.
:::

Once you have configured your network, you can view your IPv4 address via the `ifconfig` command. After that, you can connect via VNC viewer or SSH (we will use SSH as an example below).

The command line usage of SSH is as follows:
```bash
ssh jetson@192.168.xx.xx
```
::: note
The default username is **jetson**, and the default password is **iscas**.
:::

Additionally, we prefer that you use VS code for SSH connections during this process.

As soon as you have connected to the terminal inside the vehicle, you can start some programs to run the vehicle.

## Start the Vehicle Chassis and Sensors

Firstly, launch chassis and sensors driver and sensors of the vehicle.

```bash
roslaunch pavs_bringup pavs_chassis_and_sensors.launch
```

With the chassis booted, you can view the current list of messages via the `rostopic list`, e.g. `/cmd_vel` is the topic for which the chassis expects twist subscribers.

At this point, launch another terminal, again using SSH to connect to the vehicle, and enter the following commands to test that the motors and servos are working properly.