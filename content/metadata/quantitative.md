---
title: "Quantitative"
date: 2021-09-28T11:27:47-07:00
weight: 1
draft: false
---

The following quantitative metadata fields describe each data product.

- Product Name: The name given to the product by the data producer.
- Product Type: The classification of the product as:
    - Gravity: A geopotential model of the body that can be used as the geoid.
    - Geodetic Coordinate Reference Frame (or Proxy): An [IAU](https://www.iau.org/science/scientific_bodies/working_groups/100/) definition of the coordinate reference frame or a product that can be a proxy for this definition (e.g., LOLA for the Moon.)
    - Elevation: Data describing the height above or below a shape model of a given body
    - Orthoimage(s): Orthorectified (to some DTM or best fit ellipsoid) image data
    - Orthomosaic(s): A collection of orthorectified image data merged into an image mosaic with larger spatial coverage
- Horizontal Accuracy: The absolute horizontal accuracy as reported by the data producer or subsequent peer reviewed study.
- Vertical Accuracy: The absolute vertical accuracy as reported by the data producer or subsequent peer reviewed study.
- Resolution: The resolution reported in units per pixels, moments, or framelets, as appropriate for the data type.
- Coverage: The spatial extent of a given data product.
- Status: Either current or superseded. The latter are products that may no longer be referencing the current geodetic coordinate reference frame or products which have been released with multiple versions due to later, improved processing.
- Offline Formats: The formats the data are available in for download.
- Online Formats: The formats the data are available in for online or remote streaming.
- Source or Producer: The entity that created the data product.
- Data Provider or Host: The entity making the data available for download or streaming.
- Reference: The peer-reviewed reference describing the data product.

#### Omitted Fields for Future Addition
The following fields could be added in the future to more richly describe data sets:

  - [Semantic Accuracy](https://iso25000.com/index.php/en/iso-25000-standards/iso-25012/134-accuracy): the closeness of the attribute values to those as being defined as semantically correct within a given domain 
