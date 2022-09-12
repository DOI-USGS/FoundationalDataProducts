---
title: "Moon"
date: 2021-09-28T10:54:07-07:00
draft: false
weight: 3
bibFile: "content/bibliography.json"
---


{{< data-table >}}
{
    "headers": [
        "Product Name",
        "Product Type",
        "Horizontal Accuracy",
        "Vertical Accuracy",
        "Resolution",
        "Coverage",
        "Status",
        "Offline Formats",
        "Online Formats",
        "Data Producer",
        "Data Provider",
        "References"
    ],
    "rows": [
    {
      "Product Name": "GRGM1200A",
      "Product Type": "Gravity",
      "Horizontal Accuracy": "NA",
      "Vertical Accuracy": "NA",
      "Resolution": "$<$ 5kmpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["ASCII", "GeoTiff", "PDS IMG"],
      "Online Formats": ["?"],
      "Data Producer": "GSFC",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Lemoine:2014grs", "Goossens:2016lpsc"]
    },
    {
      "Product Name": "Gridded Unified Lunar Control Network (ULCN) DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "~3km",
      "Vertical Accuracy": "?",
      "Resolution": "16ppd / 118mpp",
      "Coverage": "85S to 85N",
      "Status": "Superseded",
      "Offline Formats": ["ArcGrid", "BIL", "Cube"],
      "Online Formats": ["???"],
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Archinal:2007"]
    },
    {
      "Product Name": "Gridded Lunar Orbiter Laser Altimeter (LOLA)",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "20m",
      "Vertical Accuracy": "1m",
      "Resolution": "256ppd / 118mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["PDS3", "Cube", "GeoTiff"],
      "Online Formats": ["WMS"],
      "Data Producer": "GSFC",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        },{
                "name": "USGS",
                "href": ""
            }
    ],
      "References": ["Neumann:2009"]
    },
    {
      "Product Name": "SLDEM2015",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "60-100m",
      "Vertical Accuracy": "3-4m",
      "Resolution": "512ppd / ~60mpp",
      "Coverage": "60S to 60N",
      "Status": "Current",
      "Offline Formats": ["GeoTiff", "IMG", "JPEG2000"],
      "Online Formats": ["WMS"],
      "Data Producer": "GSFC",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        },{
                "name": "USGS",
                "href": ""
            }
    ],
      "References": ["Barker:2016icarus"]
    },
    {
      "Product Name": "LOLA Polar Gridded Data Record",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "1m",
      "Vertical Accuracy": "~10cm",
      "Resolution": "Varies",
      "Coverage": "Varies",
      "Status": "Current",
      "Offline Formats": ["IMG", "JPEG2000"],
      "Online Formats": ["?"],
      "Data Producer": "LOLA Team",
      "Data Provider": [
        {
            "name": "MIT",
            "href": ""
        },{
                "name": "PDS",
                "href": ""
            }
    ],
      "References": ["Smith:2017icarus"]
    },
    {
      "Product Name": "Kaguya (SELENE) LALT DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "77m",
      "Vertical Accuracy": "?",
      "Resolution": "16ppd / 2kmpp",
      "Coverage": "Near Global",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["?"],
      "Data Producer": "JAXA",
      "Data Provider": [
        {
            "name": "DARTS",
            "href": ""
        }
    ],
      "References": ["Araki:2009sci"]
    },
    {
      "Product Name": "Kaguya (SELENE) North Pole LALT DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "77m",
      "Vertical Accuracy": "?",
      "Resolution": "16ppd / 2kmpp",
      "Coverage": "79N - ~90N",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["?"],
      "Data Producer": "JAXA",
      "Data Provider": [
        {
            "name": "DARTS",
            "href": ""
        }
    ],
      "References": ["Araki:2009sci"]
    },
    {
      "Product Name": "Kaguya (SELENE) South Pole LALT DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "77m",
      "Vertical Accuracy": "?",
      "Resolution": "16ppd / 2kmpp",
      "Coverage": "79S - ~90S",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["?"],
      "Data Producer": "JAXA",
      "Data Provider": [
        {
            "name": "DARTS",
            "href": ""
        }
    ],
      "References": ["Araki:2009sci"]
    },
    {
      "Product Name": "CLTM-s01",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "445m",
      "Vertical Accuracy": "31m",
      "Resolution": "0.25ppd / 7.5kmpp",
      "Coverage": "Global",
      "Status": "Superseded",
      "Offline Formats": ["Unreleased"],
      "Online Formats": ["?"],
      "Data Producer": "CNSA",
      "Data Provider": [
        {
            "name": "GRAS",
            "href": ""
        }
    ],
      "References": ["Ping:2009"]
    },
    {
      "Product Name": "CE-1 LAM Derived \\ac{DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "50m",
      "Vertical Accuracy": "?",
      "Resolution": "0.0625ppd / 20mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["Unreleased"],
      "Online Formats": ["?"],
      "Data Producer": "CNSA",
      "Data Provider": [
        {
            "name": "GRAS",
            "href": ""
        }
    ],
      "References": ["Huang:2018aa"]
    },
    {
      "Product Name": "GLD100 \\ac{WAC \\ac{DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "1km",
      "Vertical Accuracy": "20m global; 10m flat maria",
      "Resolution": "100mpp",
      "Coverage": "79N - 79SS",
      "Status": "Current",
      "Offline Formats": ["GeoTiff", "ISIS Cub"],
      "Online Formats": ["WMS"],
      "Data Producer": "ASU",
      "Data Provider": [
        {
            "name": "ASU",
            "href": ""
        },{
                "name": "USGS",
                "href": ""
            }
    ],
      "References": ["Scholten:2012"]
    },
    {
      "Product Name": "LMMP Generated LRO-NAC DEMs",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "20m",
      "Vertical Accuracy": "1 - 2m (reported per product)",
      "Resolution": "1.5mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["GeoTiff"],
      "Online Formats": ["?"],
      "Data Producer": "ASU, USGS,UA, DLR, AMES, OSU",
      "Data Provider": [
        {
            "name": "JPL",
            "href": ""
        }
    ],
      "References": ["Tran:2010isprs"]
    },
    {
      "Product Name": "LROC NAC DEMs ($>$450 created)",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "Varied",
      "Vertical Accuracy": "Varied (Tied to LOLA)",
      "Resolution": "1.5mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": ["WMS"],
      "Data Producer": "ASU",
      "Data Provider": [
        {
            "name": "ASU",
            "href": ""
        }
    ],
      "References": ["HENRIKSEN:2017icarus"]
    },
    {
      "Product Name": "Apollo 15,16, 17 Metric DEM Mosaic",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "91m",
      "Vertical Accuracy": "41m",
      "Resolution": "1024ppd",
      "Coverage": "38S - 38N",
      "Status": "Current",
      "Offline Formats": ["GeoTiff"],
      "Online Formats": ["?"],
      "Data Producer": "NASA Ames",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Nefian:2009"]
    },
    {
      "Product Name": "Kaguya TC Stereophotogrammetric DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "50m",
      "Vertical Accuracy": "5m",
      "Resolution": "4095ppd / ~7.5mpp",
      "Coverage": "~95%",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["?"],
      "Data Producer": "JAXA",
      "Data Provider": [
        {
            "name": "DARTS",
            "href": ""
        }
    ],
      "References": ["Haruyama:2012lpsc"]
    },
    {
      "Product Name": "Chandrayaan-1 TMC DEM Mosaic",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "25m, 10m, 5m(?)",
      "Coverage": "Global (?)",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": ["?"],
      "Data Producer": "ISRO",
      "Data Provider": [
        {
            "name": "ISDA",
            "href": ""
        }
    ],
      "References": ["Sivakumar:2012", "Suresh:nd"]
    },
    {
      "Product Name": "LROC WAC Mosaic",
      "Product Type": "Uncontrolled Orthomosaic",
      "Horizontal Accuracy": "45m",
      "Vertical Accuracy": "?",
      "Resolution": "100mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTIFF"],
      "Online Formats": ["WMS"],
      "Data Producer": "ASU",
      "Data Provider": [
        {
            "name": "ASU",
            "href": ""
        },{
                "name": "PDS",
                "href": ""
        }, {
                "name": "USGS",
                "href": ""
            }
    ],
      "References": ["Robinson:2012isprs"]
    },
    {
      "Product Name": "LROC NAC DEM  Derived Orthomosaics",
      "Product Type": "Absolutely Controlled Orthomosaics",
      "Horizontal Accuracy": "Varies with underlying DEM",
      "Vertical Accuracy": "Varies with underlying DEM",
      "Resolution": "~1mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["?"],
      "Data Producer": "ASU",
      "Data Provider": [
        {
            "name": "ASU",
            "href": ""
        },{
                "name": "PDS",
                "href": ""
        }, {
                "name": "JPL",
                "href": ""
            }
    ],
      "References": ["HENRIKSEN:2017icarus"]
    },
    {
      "Product Name": "Uncontrolled LROC NAC Polar Orthomosaics",
      "Product Type": "Uncontrolled Controlled Orthomosaics",
      "Horizontal Accuracy": "Varies with underlying DEM",
      "Vertical Accuracy": "Varies with underlying DEM",
      "Resolution": "~1mpp",
      "Coverage": "88.5 - 90N/S",
      "Status": "Current",
      "Offline Formats": ["Cube"],
      "Online Formats": ["WMS"],
      "Data Producer": "ASU",
      "Data Provider": [
        {
            "name": "ASU",
            "href": ""
        }
    ],
      "References": ["Wagner:2015lpsc"]
    },
    {
      "Product Name": "Clementine Mosaic",
      "Product Type": "Uncontrolled Orthomosaics",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "250mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["WMS"],
      "Data Producer": "ASU",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Speyerer:2018lpsc"]
    },
    {
      "Product Name": "Kaguya TC Global Orthomosaic",
      "Product Type": "Uncontrolled Orthomosaic",
      "Horizontal Accuracy": "50m",
      "Vertical Accuracy": "5m",
      "Resolution": "474mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["GeoTiff"],
      "Online Formats": ["?"],
      "Data Producer": "JAXA",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Haruyama:2012lpsc"]
    },
    {
      "Product Name": "Kaguya TC Orthoimages",
      "Product Type": "Uncontrolled Orthoimages",
      "Horizontal Accuracy": "50m",
      "Vertical Accuracy": "5m",
      "Resolution": "4095ppd / ~7.5mpp",
      "Coverage": "~95%",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": ["?"],
      "Data Producer": "JAXA",
      "Data Provider": [
        {
            "name": "DARTS",
            "href": ""
        }
    ],
      "References": ["Haruyama:2012lpsc"]
    }
  ]
}
{{< /data-table >}}