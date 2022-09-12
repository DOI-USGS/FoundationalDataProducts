---
title: "Welcome to the Foundational Data Products Knowledge Inventory"
date: 2021-09-28T10:47:28-07:00
draft: false
weight: 1
---

### Welcome to the PSDI Foundational Data Products Knowledge Inventory

This site hosts a curated listing or knowledge inventory of [foundational data products]({{< relref "_index.md#foundational-data-products" >}}) for most of the bodies in the solar system. A knowledge inventory is a systematic cataloging of the knowledge currently retained within an organization (e.g., planetary science) and can be used to identify gaps that can or should be filled (e.g., a missing product to support an upcoming scientific investigation or mission), or as an enumerated listing of data to include in a data portal. The collection of information about these foundational data products seeks to democratize their use and make them significantly more findable than previously known.

A key component to use foundational data product is understanding their spatial efficacy. Spatial efficacy describes the ability for a data product to provide the intended results. Spatial efficacy varies by use case as different products have metadata attributes (e.g., spatial resolution) that are suitable for different analyses. Quantitative and qualitative metadata fields are defined and described in the [metadata]() section of this site.

One of the challenges initially creating this knowledge inventory was data discoverability. Despite these best efforts, the planetary sciences do not have a single, unified data clearinghouse or single major journal where data products are described upon release. Therefore, significant effort is required to identify products.
The [data]() section is organized by major body (e.g., Mars and associated satellites Phobos and Deimos) and presents metadata describing each data product in tabular form. The metadata are not necessarily complete for each entry, but a best effort has been performed to initially collate this information. 

This best effort has consisted of combing the literature and data stores (e.g., the Planetary Data System (PDS) or international PDS like data archives, personal publicly available websites and blogs, etc.) for descriptions of data. The initial listing was then reviewed by members of the [Mapping and Spatial Data Infrastructure Team](https://www.lpi.usra.edu/mapsit/) and peer reviewed in the paper [Knowledge Inventory of Foundational Data Products in Planetary Science](https://iopscience.iop.org/article/10.3847/PSJ/abcb94).

![](/images/fdp_pie.png)

The peer reviewed paper linked above is a snapshot of the current state of foundational data products to the best of our knowledge and was, unfortunately, undoubtedly out of date by the time the work was published. Data producers work diligently to create and release products at a cadence far faster than addendum could be published in the peer reviewed literature. Hence, the existence of this site!

This site is dependent upon data producers, data users, and the interested public to crowd source keeping the knowledge inventory up to date. The [contributing]() section of the site describes means to contribute updates to existing entries, new entries, and provides links to places to discuss entries.

### Future Improvements
This knowledge inventory currently only covers foundational data products. In reality, an entire universe of [framework data products]() also exist. As [Planetary Spatial Data Infrastructures](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018EA000411) are developed users will require a combination of discoverable foundational and framework data products in order to effectively carry out their engineering and scientific investigations. The first step in making those data [FAIRly](https://www.go-fair.org/fair-principles/) available is to know that they exist. This effort will, in the future, include framework products as well to help bootstrap the creation of centralized data clearinghouse and PSDIs.

### Foundational Data Products
Foundational data products meet two criteria as defined by [Laura & Beyer (2021)](https://iopscience.iop.org/article/10.3847/PSJ/abcb94). 

  1. Foundational data products fall into one of three data type categories: geodetic coordinate reference frames, topography, and orthoimages. These data are widely used either directly or a second-order products by a wide subset of the planetary science community. A second-order user is someone who uses a data product (e.g., a geologic map) whose generation requires extensive use of foundational data products (e.g., topography and orthoimages or orthomosaics in the case of a geologic map.)
  1. Foundational data products must facilitate or allow for rigorous spatial error assessment and reporting. In other words, the data must be suitable for performing an error assessment, must have had an error assessment performed, and must have the results published somewhere. To be suitable for performing a rigorous spatial error assessment data should be minimally interpolated and rigorously geometrically controlled. 

  Perhaps the best way to make this requirement clear is with an example. Orthoimages created from photogrammetrically controlled image data and tied to cross-over corrected lidar (e.g., Mars Orbiter Laser Altimeter (MOLA), Lunar Orbiter Laser Altimeter (LOLA)) are the only products that are rigorously transformed from direct observations into a geospatial context that maintains accurate of all spatial relationships. Therefore, one can directly compute and report the accuracy of the products.

The knowledge inventory presented on this site contains the best available foundational data products. The bar to meet the second criteria is quite high and in some cases unachievable given the currently available data. We do not consider this a problem as one of the stated goals of this knowledge inventory is to present gaps that can be filled by data producers. Therefore, foundational data products are presented with unknown spatial errors, alignment to best fit spheres or ellipsoids when ideally geoids would be used, etc. A best effort is made to document these instances.


### Citing this work
If you use information from this website in your work, please consider citing [Knowledge Inventory of Foundational Data Products in Planetary Science](https://iopscience.iop.org/article/10.3847/PSJ/abcb94).

```
@article{Laura_2021,
	Author = {Laura, Jason R. and Beyer, Ross A.},
	Doi = {10.3847/psj/abcb94},
	Journal = {The Planetary Science Journal},
	Month = {jan},
	Number = {1},
	Pages = {18},
	Publisher = {American Astronomical Society},
	Title = {Knowledge Inventory of Foundational Data Products in Planetary Science},
	Url = {https://doi.org/10.3847/psj/abcb94},
	Volume = {2},
	Year = 2021,
	Bdsk-Url-1 = {https://doi.org/10.3847/psj/abcb94}}
```
