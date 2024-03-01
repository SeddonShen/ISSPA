# Quick Start

In this tutorial, you will learn how to use the [ISSPA source code](https://github.com/chenhengwei1999/ISSPA)
and how PA (Pyhsical Agents) are launched! Specifically, the following sections are included:

- Developing Environment

- WorkSpace Setup


## Developing Environment

We recommend using **Ubuntu 20.04** as your development system, ROS1 noetic is the version we use at the moment, 
and we will upgrade to ROS2 later in our work.

- Ubuntu 20.04

- ROS1 noetic

The following are some of the dependent libraries that need to be installed before the program can be compiled and run:

```bash
sudo apt update
sudo apt install libuvc-dev libgoogle-glog-dev ros-noetic-costmap-2d ros-noetic-nav-core libceres-dev
```

## WorkSpace Setup

[ISSPA source code](https://github.com/chenhengwei1999/ISSPA) as our main repository, it is recommended that you first understand its directory structure, 
which is necessary for later use and development.

First, clone the source code to the ```/home/$USER/``` directory:

```bash
cd /home/$USER
git clone https://github.com/chenhengwei1999/ISSPA.git
```

Next, use ```catkin_make``` to compile the workspace.

```bash
cd /home/$USER/ISSPA
catkin_make
```

::: tip NOTE

You can also use ```catkin_make_isolated``` or ```catkin``` for compilation. ROS provides a number of compilation tools, the differences and advantages 
    of which are described at [here](./compilation-tools).
:::

When executing ```catkin_make```, you may encounter some problems. Common **Issues & Troubleshooting** can be found [here](./issue-and-troubleshooting).
::: tip NOTE
   **Warm reminder:** Please remember to refresh the environment variables before using the program.
   Alternatively, storing them in ```~/.bashrc`` is fine.
```bash
cd /home/$USER/ISSPA
source devel/setup.bash
# echo "source ~/ISSPA/devel/setup.bash" >> ~/.bashrc
```
:::
