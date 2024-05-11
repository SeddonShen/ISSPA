# 快速上手指南

本教程将向您介绍如何使用[ISSPA源代码](https://github.com/chenhengwei1999/ISSPA)以及物理代理（PA）的启动方式！具体包含以下内容：

- 开发环境配置
- 工作区构建

## 开发环境配置

我们推荐使用**Ubuntu 20.04**作为开发系统，并当前采用ROS1 noetic版本，未来工作中我们将升级至ROS2。

- **Ubuntu 20.04**
- **ROS1 noetic**

在编译和运行程序之前，需安装以下依赖库：

```bash
sudo apt update
sudo apt install libuvc-dev libgoogle-glog-dev ros-noetic-costmap-2d ros-noetic-nav-core libceres-dev
```

## 工作区构建

以[ISSPA源代码库](https://github.com/chenhengwei1999/ISSPA)为主要存储库，建议您首先了解其目录结构，这对后续使用和开发至关重要。

首先，将源代码克隆到```/home/$USER/```目录下：

```bash
cd /home/$USER
git clone https://github.com/chenhengwei1999/ISSPA.git
```

接着，使用```catkin_make```编译工作区。

```bash
cd /home/$USER/ISSPA
catkin_make
```

::: tip NOTE
您也可以使用```catkin_make_isolated```或```catkin```进行编译。ROS提供了多种编译工具，它们之间的差异及优势说明可参考[此处](./compilation-tools)。
:::

执行```catkin_make```时，可能会遇到一些问题。常见的**问题与解决办法**可在此查阅[这里](./issue-and-troubleshooting)。

::: tip NOTE
**请注意：** 在使用程序前，请记得刷新环境变量。或者将其添加到```~/.bashrc```文件中亦可。
```bash
cd /home/$USER/ISSPA
source devel/setup.bash
# echo "source ~/ISSPA/devel/setup.bash" >> ~/.bashrc
```
:::