# Object Detection Plugin

## Current Listings

As of now, ISSPA has integrated some baseline algorithms as shown below:

| Camera Based | Lidar Based |
|--------------|-------------|
| YOLO v5      | PointPillars |

## Adding Plugins

The structure of the document has been designed in ISSPA and you can contribute to us by following the tutorials below.
Just use `isspa_object_detection_plugin` as the name of your algorithm:

```bash
mkdir -p ~/pa_ws/src && cd ~/pa_ws/src
git clone https://github.com/chenhengwei1999/ISSPA.git
cd ISSPA/src/isspa_object_detection
catkin_create_pkg isspa_mapping_plugin rospy roscpp std_msgs
```
Then, you can add your own algorithm in the `isspa_object_detection_plugin` package.

Once you have added it, you can compile the feature package with the help of the `catkin_make` tool to see if it is 
available and if it runs smoothly. If it runs successfully, you can refer to the Github Pull Request to submit your merge request.
