---
title: "Mars & Satellites"
date: 2021-09-28T10:54:07-07:00
draft: false
weight: 4
bibFile: "content/bibliography.json"
---


{{< data-table >}}
{
    "headers": [
        "Body",
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
      "Body": "Phobos",
      "Product Name": "Oberst Control Network",
      "Product Type": "Geodetic Coordinate Reference Frame (or Proxy)",
      "Horizontal Accuracy": "13.7m",
      "Vertical Accuracy": "?",
      "Resolution": "N/A",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": "?",
      "Data Producer": "DLR",
      "Data Provider": [
        {
            "name": "unknown",
            "href": ""
        }
    ],
      "References": ["Oberst:2014pss"]
    },
    {
      "Body": "Phobos",
      "Product Name": "Stereo-photoclinometry Derived Shape Model",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "15mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": "SBMT",
      "Data Producer": "Ernst, et al.",
      "Data Provider": [
        {
            "name": "SBMT",
            "href": ""
        }
    ],
      "References": ["Ernst:2015lpsc"]
    },
    {
      "Body": "Phobos",
      "Product Name": "Shape Model",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "60mpp",
      "Coverage": "Global",
      "Status": "Superceded",
      "Offline Formats": ["ICQ"],
      "Online Formats": "?",
      "Data Producer": "Gaskell, et al.",
      "Data Provider": [
        {
            "name": "PDS",
            "href": "https://pds.nasa.gov/ds-view/pds/viewDataset.jsp?dsid=VO1-SA-VISA%2FVISB-5-PHOBOSSHAPE-V1.0"
        }
    ],
      "References": ["Gaskell:2011pds"]
    },
    {
      "Body": "Phobos",
      "Product Name": "HRSC DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "20m",
      "Vertical Accuracy": "?",
      "Resolution": "1.9ppd / 100 mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["GeoTiff", "IMG", "JPEG2000"],
      "Online Formats": "?",
      "Data Producer": "DLR",
      "Data Provider": [
        {
            "name": "PDS",
            "href": "https://pds-geosciences.wustl.edu/mex/mex-msa-hrsc-5-refdr-phobos-maps-v1/mexhrs_5001/data/"
        },
        {
            "name": "PSA",
            "href": "https://archives.esac.esa.int/psa/ftp/MARS-EXPRESS/HRSC/MEX-MSA-HRSC-5-REFDR-PHOBOS-MAPS-V1.0/DATA/"
        },

        {
            "name": "USGS",
            "href": "https://astrogeology.usgs.gov/search/map/Phobos/MarsExpress/HRSC/Phobos_ME_HRSC_DEM_Global_2ppd"
        }
    ],
      "References": ["Wahlisch:2010epsl"]
    },
    {
      "Body": "Phobos",
      "Product Name": "Viking Global Mosaic",
      "Product Type": "Absolutely Controlled Orthomosaics",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "40ppd / 5mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["GeoTiff"],
      "Online Formats": "?",
      "Data Producer": "Simonelli, et al.",
      "Data Provider":[{
        "name": "USGS",
        "href": "https://astrogeology.usgs.gov/search/map/Phobos/Viking/Phobos_Viking_Mosaic_40ppd_DLRcontrol"
    }
],
      "References": ["Simonelli:1993icarus", "Stooke:2012pds"]
    },
    {
      "Body": "Phobos",
      "Product Name": "HSRC Mosaic",
      "Product Type": "Absolutely Controlled Orthomosaics",
      "Horizontal Accuracy": "20m",
      "Vertical Accuracy": "?",
      "Resolution": "16ppd / 12 mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["GeoTiff", "IMG", "JPEG2000"],
      "Online Formats": "?",
      "Data Producer": "DLR",
      "Data Provider": [
        {
            "name": "PDS",
            "href": "https://pds-geosciences.wustl.edu/mex/mex-msa-hrsc-5-refdr-phobos-maps-v1/mexhrs_5001/data/"
        },
        {
            "name": "PSA",
            "href": "https://archives.esac.esa.int/psa/ftp/MARS-EXPRESS/HRSC/MEX-MSA-HRSC-5-REFDR-PHOBOS-MAPS-V1.0/DATA/"
        },

        {
            "name": "USGS",
            "href": "https://astrogeology.usgs.gov/search/map/Phobos/MarsExpress/SRC/Phobos_ME_SRC_Mosaic_Global_16ppd"
        }
    ],
      "References": ["Wahlisch:2010epsl"]
    },
    {
      "Body": "Phobos",
      "Product Name": "Co-registered Image Data (>3400)",
      "Product Type": "Absolutely Controlled Orthoimages",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "Varies",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": "SBMT",
      "Data Producer": "Ernst, et al.",
      "Data Provider": [
        {
            "name": "SBMT",
            "href": ""
        }
    ],
      "References": ["Ernst:2018lpsc"]
    },
    {
      "Body": "Deimos",
      "Product Name": "Stereo-photoclinometry Derived Shape Model",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "?",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": "SBMT",
      "Data Producer": "Ernst, et al.",
      "Data Provider": [
        {
            "name": "SBMT",
            "href": ""
        }
    ],
      "References": ["Ernst:2015lpsc"]
    },
    {
      "Body": "Deimos",
      "Product Name": "Co-registered Image Data (>950)",
      "Product Type": "Absolutely Controlled Orthoimages",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "Varies",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": "SBMT",
      "Data Producer": "Ernst, et al.",
      "Data Provider": [
        {
            "name": "SBMT",
            "href": ""
        }
    ],
      "References": ["Ernst:2018lpsc"]
    },
    {
      "Body": "Mars",
      "Product Name": "Goddard Mars Model 3 (GMM-3)",
      "Product Type": "Gravity",
      "Horizontal Accuracy": "N/A",
      "Vertical Accuracy": "N/A",
      "Resolution": "120kmpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["Ascii", "IMG"],
      "Online Formats": "?",
      "Data Producer": "GSFC",
      "Data Provider": [
        {
            "name": "PDS",
            "href": "https://pds-geosciences.wustl.edu/mro/mro-m-rss-5-sdp-v1/mrors_1xxx/data/shadr/"
        }
    ],
      "References": ["Genova:2016"]
    },
    {
      "Body": "Mars",
      "Product Name": "Goddard Mars Model 2B (GMM2B)",
      "Product Type": "Gravity",
      "Horizontal Accuracy": "N/A",
      "Vertical Accuracy": "N/A",
      "Resolution": "120kmpp",
      "Coverage": "Global",
      "Status": "Superseded",
      "Offline Formats": ["Ascii", "IMG"],
      "Online Formats": "?",
      "Data Producer": "GSFC",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Lemoine:2001"]
    },
    {
      "Body": "Mars",
      "Product Name": "MGS95J Model",
      "Product Type": "Gravity",
      "Horizontal Accuracy": "N/A",
      "Vertical Accuracy": "N/A",
      "Resolution": "120kmpp",
      "Coverage": "Global",
      "Status": "Superseded",
      "Offline Formats": ["Ascii", "IMG"],
      "Online Formats": "?",
      "Data Producer": "JPL",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Konopliv:2006icarus"]
    },
    {
      "Body": "Mars",
      "Product Name": "Interpolated MOLA DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "100m",
      "Vertical Accuracy": "3m",
      "Resolution": "463mpp / 128ppd",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "WMS",
      "Data Producer": "GSFC",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        },
            {
                "name": "USGS",
                "href": ""
            }
    ],
      "References": ["?"]
    },
    {
      "Body": "Mars",
      "Product Name": "HRSC / MOLA Blended Product",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "100m",
      "Vertical Accuracy": "3m",
      "Resolution": "200mpp",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["GeoTIff"],
      "Online Formats": "?",
      "Data Producer": "USGS",
      "Data Provider": 
      [
        {
            "name": "USGS",
            "href": "https://astrogeology.usgs.gov/search/map/Mars/Topography/HRSC_MOLA_Blend/Mars_HRSC_MOLA_BlendDEM_Global_200mp"
        }
    ],
      "References": ["Fergason:2018web"]
    },
    {
      "Body": "Mars",
      "Product Name": "HRSC South Pole DEMs / Merged Product",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "Varies (See Reference)",
      "Resolution": "50mpp",
      "Coverage": "82S - 90S",
      "Status": "Current",
      "Offline Formats": ["GeoTIff"],
      "Online Formats": "?",
      "Data Producer": "University College London",
      "Data Provider": [
        {
            "name": "PSA Guest Facility",
            "href": ""
        }
    ],
      "References": ["Putri:2019pss"]
    },
    {
      "Body": "Mars",
      "Product Name": "High Resolution Stereo Camera Derived DEMs (> 1250)",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "<100m",
      "Vertical Accuracy": "<4m",
      "Resolution": "up to 50mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG", "GeoTiff"],
      "Online Formats": "?",
      "Data Producer": "HRCS Team / DLR",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        },
            {
                "name": "PSA",
                "href": ""
            }
    ],
      "References": ["Gwinner:2010epsl", "Dumke:2010"]
    },
    {
      "Body": "Mars",
      "Product Name": "HRSC South Pole Orthoimages / Orthomosaic",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "Varies (See Reference)",
      "Resolution": "12.5mpp",
      "Coverage": "82S-90S",
      "Status": "Current",
      "Offline Formats": ["GeoTiff"],
      "Online Formats": "?",
      "Data Producer": "University College London",
      "Data Provider": [
        {
            "name": "PSA Guest Facility",
            "href": ""
        }
    ],
      "References": ["Putri:2019pss"]
    },
    {
      "Body": "Mars",
      "Product Name": "CaSSIS DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "~20mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["GeoTiff", "JPEG2000"],
      "Online Formats": "?",
      "Data Producer": "CaSSIS Team",
      "Data Provider": [
        {
            "name": "CaSSIS Team",
            "href": ""
        }
    ],
      "References": ["Conway:2018", "Re:2019"]
    },
    {
      "Body": "Mars",
      "Product Name": "ASU HiRISE Dervied DEM (>600)",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "Varies",
      "Vertical Accuracy": "<1m",
      "Resolution": "1-2mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG"],
      "Online Formats": "?",
      "Data Producer": "UA / USGS",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Kirk:2008jgr", "UA:2019web"]
    },
    {
      "Body": "Mars",
      "Product Name": "CTX Derived DEM",
      "Product Type": "Elevation",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "20mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "?",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Fergason:2018", "Fergason:2017ssr"]
    },
    {
      "Body": "Mars",
      "Product Name": "Terrain Relative Navigation CTX Orthorectified Image Mosaic",
      "Product Type": "Absolutely Controlled Orthoimages",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "5mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "?",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Fergason:2020lpsc", "Fergason:2018", "Fergason:2017ssr"]
    },
    {
      "Body": "Mars",
      "Product Name": "USGS Derived Human Exploration CTX Orthomosaics",
      "Product Type": "Relatively Controlled Orthoimages",
      "Horizontal Accuracy": "100m",
      "Vertical Accuracy": "?",
      "Resolution": "5mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "?",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Hare:2016web"]
    },
    {
      "Body": "Mars",
      "Product Name": "HiRISE Orthomosaics",
      "Product Type": "Absolutely Controlled Orthoimages",
      "Horizontal Accuracy": "Varies",
      "Vertical Accuracy": "<1m",
      "Resolution": "0.25mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG", "JPEG2000"],
      "Online Formats": "?",
      "Data Producer": "UA, USGS",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        }
    ],
      "References": ["Kirk:2008jgr", "UA:2019web", "Fergason:2020lpsc_a"]
    },
    {
      "Body": "Mars",
      "Product Name": "High Resolution Stereo Camera Derived Orthoimages (>1250)",
      "Product Type": "Absolutely Controlled Orthoimages",
      "Horizontal Accuracy": "<100m",
      "Vertical Accuracy": "<4m",
      "Resolution": "up to 12.5mpp",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["IMG", "JPEG2000"],
      "Online Formats": "?",
      "Data Producer": "HRSC Team, DLR",
      "Data Provider": [
        {
            "name": "PDS",
            "href": ""
        },
            {
                "name": "PSA",
                "href": ""
            }
    ],
      "References": ["Gwinner:2010epsl"]
    },
    {
      "Body": "Mars",
      "Product Name": "University College London Co-Registered Hi-resolution Data",
      "Product Type": "Relatively Controlled Orthoimages",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "Varies",
      "Coverage": "Regional",
      "Status": "Current",
      "Offline Formats": ["?"],
      "Online Formats": "iMars (?)",
      "Data Producer": "University College London",
      "Data Provider": [
        {
            "name": "unknown",
            "href": ""
        }
    ],
      "References": ["Sidiropoulos:2016lpsc", "Sidiropoulos:2016isprs"]
    },
    {
      "Body": "Mars",
      "Product Name": "Murray Lab Global CTX",
      "Product Type": "Semi-controlled Unrectified Image Mosaic",
      "Horizontal Accuracy": "?",
      "Vertical Accuracy": "?",
      "Resolution": "5mpp",
      "Coverage": "88S-88N",
      "Status": "Current",
      "Offline Formats": ["GeoTiff"],
      "Online Formats": "WMS",
      "Data Producer": "California Institute of Technology",
      "Data Provider": [
        {
            "name": "California Institute of Technology",
            "href": ""
        }
    ],
      "References": ["Dickson:2018lpsc"]
    },
    {
      "Body": "Mars",
      "Product Name": "Mars Digital Image Mosaic 2.1 (Control Network)",
      "Product Type": "Geodetic Coordinate Reference Frame (or Proxy)",
      "Horizontal Accuracy": "Average: 200m Max: 1000m",
      "Vertical Accuracy": "10m",
      "Resolution": "N/A",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["Cube Control Network", "PVL"],
      "Online Formats": "?",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Archinal:2003lpsc"]
    },
    {
      "Body": "Mars",
      "Product Name": "Mars Digital Image Mosaic 2.1",
      "Product Type": "Absolutely Controlled Orthomosaics",
      "Horizontal Accuracy": "Average: 200m Max: 1000m",
      "Vertical Accuracy": "10m",
      "Resolution": "231mpp / 256ppd",
      "Coverage": "Global",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "WMS",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Kirk:2001lpsc", "Archinal:2003lpsc"]
    },
    {
      "Body": "Mars",
      "Product Name": "THEMIS Day IR Orthomosaic",
      "Product Type": "Absolutely Controlled Orthomosaics",
      "Horizontal Accuracy": "150m - 275m",
      "Vertical Accuracy": "?",
      "Resolution": "100mpp",
      "Coverage": "60S - 60N",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "WMS",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Fergason:2013lpsc"]
    },
    {
      "Body": "Mars",
      "Product Name": "THEMIS Night IR Orthomosaic",
      "Product Type": "Absolutely Controlled Orthomosaics",
      "Horizontal Accuracy": "150m - 275m",
      "Vertical Accuracy": "?",
      "Resolution": "100mpp",
      "Coverage": "60S - 60N",
      "Status": "Current",
      "Offline Formats": ["IMG", "Cube", "GeoTiff"],
      "Online Formats": "WMS",
      "Data Producer": "USGS",
      "Data Provider": [
        {
            "name": "USGS",
            "href": ""
        }
    ],
      "References": ["Fergason:2013lpsc"]
    }
  ]
}
{{</ data-table>}}