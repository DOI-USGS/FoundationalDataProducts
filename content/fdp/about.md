---
title: "About Foundational Data Products"
date: 2021-09-28T10:54:07-07:00
draft: false
weight: 0
bibFile: "content/bibliography.json"
---


Foundational data products are:

  1. Geodetic Coordinate Reference Frame (or Proxy) defines the reference frame to which all other products are referenced and is required in order to communicate the precise location of objects or places in relation to one another.
  2. Elevation products describe (ideally) the orthometric heights of objects or locations about some agreed upon vertical datum (or vertical reference frame).
  3. Orthoimages are geometrically corrected (to topography) data sets that are planimetrically corrected and usable for accurately measuring shapes, distances, and angles.

---
**Note**

See [Laura & Beyer (2021)](https://iopscience.iop.org/article/10.3847/PSJ/abcb94) for an in-depth discussion, appropriate citations for each of these foundational data products types, and for a full discussion of Image Mosaics and other by-products of foundational data products.

---

#### Image Mosaics

Image mosaics are **not** foundational data products. Image mosaics are widely used and this inventory includes some image mosaics because of their high usability and importance as convenience products when performing analyses. The table below can be used to determine if an image mosaic has been created from foundational data products. If it has (a 'Yes' in the first column), the data product can be used in the same way that a foundational data product could be used. In other words, an orthoimage is a foundational data product. An orthomosaic created from foundational orthoimages is a second-order foundational data product and meets the same appropriateness for use criteria.

##### Geodetic Control (or just Control):
Image mosaics can be controlled, semi-controlled, or uncontrolled. In order to classify as a controlled mosaic, the sensor positions and orientations of multiple images must have been updated using a rigorous photogrammetric bundle adjustment. Semi-controlled mosaics can be created by taking the initial, estimated geographic position, and then warping (rubber sheeting or georeferencing) the images on the surface into a position where discontinuities between images are minimized. The resulting products are generally visually quite appealing but have a limited capacity for spatial accuracy assessment and are unsuitable for cross-product error analysis or co-registration with a spatial accuracy requirement. Finally, uncontrolled image mosaics use the initial, estimated geographic location of the images on the surface without any correction for inter-image discontinuities. Uncontrolled image mosaics are well suited for a first look at a geographic region, but care must be taken as the image locations within the scene are approximate.

##### Reference Frame: 
A controlled (or semi-controlled) mosaic can be related to the reference frame either relatively or absolutely. A relatively controlled image mosaic "floats" above the geodetic coordinate reference frame and has not been tied to the broader geospatial context. We considered those relatively controlled mosaics where a single ground point (a known latitude and longitude) has been used to "tack" the mosaic to the surface as still floating. An absolutely controlled image mosaic has been rigorously tied to a geodetic coordinate reference frame. Therefore, intra-data set evaluations (assuming both products are controlled to the same coordinate reference frame) are possible.

##### Rectification: 
The level of rectification applied to the images in the image mosaic also defines the fitness for use. As described above, unrectified images are in a perspective view that suffers from sensor-orientation- and topography-induced errors. Orthorectified images have been topographically corrected for a planimetric view. A rigorously controlled image mosaic that has been rectified to a spherical body representation can suffer from significant topography-induced errors that cannot be removed simply by controlling the data, and we do not consider such an image or mosaic to be orthorectified without topographic information.

##### Intended Use: 
Image mosaics can be classified based upon the way in which the individual pixels or digital number (DN) values are being reported. We classify these as either being qualitative or quantitative.



| FDP | Control         | Reference Frame | Orthorectified | Intended Use | Fit-for-Use                                                                                                                                             |
|-----|-----------------|-----------------|----------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| No  | Uncontrolled    | N/A             | No             | Cosmetic     | Quick view, not geospatial, errors not quantified                                                                                                       |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     |                 |                 | Yes            | Cosmetic     |                                                                                                                                                         |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     | Semi-Controlled | Relative        | No             | Cosmetic     | Regional Work, Small Scale (1:500,000+), spatial errors can be meaningful and a product of multiple factors                                             |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     |                 |                 | Yes            | Cosmetic     |                                                                                                                                                         |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     |                 | Absolute        | No             | Cosmetic     | Regional Work, Small Scale (1:500,000+), spatial errors can be meaningful and a product of multiple factors, cross instrument errors can be compounding |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     |                 |                 | Yes            | Cosmetic     | Regional Work, Small Scale (1:500,000+), spatial errors can be meaningful, cross instrument errors can be compounding                                   |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     | Controlled      | Relative        | No             | Cosmetic     | Geospatially enabled, spatial errors can be meaningful, cross instrument work is not possible, inter-data set geometric relationships are clean         |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     |                 |                 | Yes            | Cosmetic     | Geospatially enabled, cross instrument work is not possible, inter-data set geometric relationships are clean                                           |
|     |                 |                 |                | Science      |                                                                                                                                                         |
|     |                 | Absolute        | No             | Cosmetic     | Geospatially enabled, cross instrument work possible, geometric relationships are inaccurate                                                            |
|     |                 |                 |                | Science      |                                                                                                                                                         |
| Yes |                 |                 | Yes            | Cosmetic     | Fully geospatially enabled, spatial errors are quantifiable, cross instrument work possible, change detection possible                                  |
|     |                 |                 |                | Science      |                                                                                                                                                         |
