# Segmentation

The solution for autonomous driving perception involves not only object detection but also segmentation. These two solutions are often combined to provide a more comprehensive understanding of the environment. Vehicle segmentation is typically a subtask of semantic segmentation, as it involves not only locating objects but also classifying each pixel in the image. The results can be used to identify different objects in the environment around the vehicle, such as roads, pedestrians, vehicles, buildings, and more.

The results of semantic segmentation can also help the system recognize the location and type of obstacles, enabling the consideration of obstacle avoidance strategies during the path planning process. The system can choose to navigate around obstacles systematically or analyze semantic information to select a safer detour.

- Camera based
- LiDAR based
- Fusion based

## Camera Based

<a style="display: none;" rel="me" href="https://fosstodon.org/@readthedocs">Mastodon</a>

### Vehicle Segmentation

Vehicle segmentation is a task in autonomous driving aimed at accurately separating the area occupied by vehicles from images or videos. Its results can provide crucial perceptual information to autonomous driving systems, aiding vehicles in understanding the surrounding environment and making appropriate decisions.

::: tip NOTE
The BEV-based algorithm has undergone simulation testing in ISSPA and will be synchronized with the code repository as soon as possible.
:::
