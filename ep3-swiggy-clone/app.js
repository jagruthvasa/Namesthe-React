import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
const data = [
      {
            "card": {
                  "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "header": {
                              "title": "Top restaurant chains in Bangalore",
                              "action": {

                              },
                              "headerStyling": {
                                    "padding": {
                                          "left": 16,
                                          "top": 28,
                                          "bottom": 18
                                    }
                              }
                        },
                        "layout": {
                              "rows": 1,
                              "columns": 20,
                              "horizontalScrollEnabled": true,
                              "itemSpacing": 32,
                              "widgetPadding": {

                              },
                              "containerStyle": {
                                    "containerPadding": {
                                          "left": 16,
                                          "right": 12,
                                          "bottom": 12
                                    }
                              },
                              "scrollBar": {
                                    "scrollThumbColor": "#E46D47",
                                    "scrollTrackColor": "#02060C",
                                    "width": 54,
                                    "height": 4,
                                    "scrollStyling": {
                                          "padding": {
                                                "top": 6,
                                                "bottom": 24
                                          }
                                    }
                              },
                              "widgetTheme": {
                                    "defaultMode": {
                                          "backgroundColour": "#1B3028",
                                          "theme": "THEME_TYPE_DARK"
                                    },
                                    "darkMode": {
                                          "backgroundColour": "#1B3028",
                                          "theme": "THEME_TYPE_DARK"
                                    }
                              }
                        },
                        "id": "top_brands_for_you",
                        "gridElements": {
                              "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                    "restaurants": [
                                          {
                                                "info": {
                                                      "id": "93499",
                                                      "name": "Oven Story Pizza  Standout Toppings",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/b15faecd-733d-4b73-bec8-1a4dde234ad6_93499.jpg",
                                                      "locality": "Rashtriya Vidyalaya Rd",
                                                      "areaName": "Jayanagar",
                                                      "costForTwo": "₹400 for two",
                                                      "cuisines": [
                                                            "Pizzas",
                                                            "Pastas",
                                                            "Italian",
                                                            "Desserts",
                                                            "Beverages"
                                                      ],
                                                      "avgRating": 4.4,
                                                      "parentId": "3534",
                                                      "avgRatingString": "4.4",
                                                      "totalRatingsString": "3.6K+",
                                                      "sla": {
                                                            "deliveryTime": 27,
                                                            "lastMileTravel": 2.7,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "25-30 mins",
                                                            "lastMileTravelString": "2.7 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {

                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹149"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/oven-story-pizza-standout-toppings-rashtriya-vidyalaya-rd-jayanagar-rest93499",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "51835",
                                                      "name": "Aubree",
                                                      "cloudinaryImageId": "65faa4b5046cb2215fe285a8b96c9bd7",
                                                      "locality": "Shivaji Nagar",
                                                      "areaName": "Shivaji Nagar",
                                                      "costForTwo": "₹700 for two",
                                                      "cuisines": [
                                                            "Desserts",
                                                            "Bakery"
                                                      ],
                                                      "avgRating": 4.6,
                                                      "veg": true,
                                                      "parentId": "3807",
                                                      "avgRatingString": "4.6",
                                                      "totalRatingsString": "1.8K+",
                                                      "sla": {
                                                            "deliveryTime": 34,
                                                            "lastMileTravel": 3.9,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "30-35 mins",
                                                            "lastMileTravelString": "3.9 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 21:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "D",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Gourmet",
                                                                                          "imageId": "newg.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "60% OFF",
                                                            "subHeader": "UPTO ₹120"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.7",
                                                                  "ratingCount": "735"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/aubree-shivaji-nagar-rest51835",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "435405",
                                                      "name": "Chaayos Chai+Snacks=Relax",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
                                                      "locality": "Cunningham Road",
                                                      "areaName": "R.T. Nagar",
                                                      "costForTwo": "₹250 for two",
                                                      "cuisines": [
                                                            "Bakery",
                                                            "Beverages",
                                                            "Chaat",
                                                            "Desserts",
                                                            "Home Food",
                                                            "Italian",
                                                            "Maharashtrian",
                                                            "Snacks",
                                                            "Street Food",
                                                            "Sweets"
                                                      ],
                                                      "avgRating": 4.6,
                                                      "parentId": "281782",
                                                      "avgRatingString": "4.6",
                                                      "totalRatingsString": "1.7K+",
                                                      "sla": {
                                                            "deliveryTime": 27,
                                                            "lastMileTravel": 3.8,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "25-30 mins",
                                                            "lastMileTravelString": "3.8 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                                                        "description": "Delivery!"
                                                                  }
                                                            ],
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹199"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.1",
                                                                  "ratingCount": "364"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cunningham-road-r-t-nagar-rest435405",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "426730",
                                                      "name": "Theobroma",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/ab4cf213-bee8-45ba-9b80-2607d981885f_426730.jpg",
                                                      "locality": "Lavelle Road",
                                                      "areaName": "Ashok Nagar",
                                                      "costForTwo": "₹400 for two",
                                                      "cuisines": [
                                                            "Desserts",
                                                            "Bakery",
                                                            "Beverages"
                                                      ],
                                                      "avgRating": 4.7,
                                                      "parentId": "1040",
                                                      "avgRatingString": "4.7",
                                                      "totalRatingsString": "4.7K+",
                                                      "sla": {
                                                            "deliveryTime": 23,
                                                            "lastMileTravel": 3,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "20-25 mins",
                                                            "lastMileTravelString": "3.0 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Gourmet",
                                                                                          "imageId": "newg.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹99"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.1",
                                                                  "ratingCount": "417"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-ashok-nagar-rest426730",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "12808",
                                                      "name": "A2B - Adyar Ananda Bhavan",
                                                      "cloudinaryImageId": "pdod4o1em9potwsd22rs",
                                                      "locality": "Shanti Nagar",
                                                      "areaName": "Shanti Nagar",
                                                      "costForTwo": "₹300 for two",
                                                      "cuisines": [
                                                            "South Indian",
                                                            "North Indian",
                                                            "Sweets",
                                                            "Chinese"
                                                      ],
                                                      "avgRating": 4.6,
                                                      "veg": true,
                                                      "parentId": "22",
                                                      "avgRatingString": "4.6",
                                                      "totalRatingsString": "29K+",
                                                      "sla": {
                                                            "deliveryTime": 31,
                                                            "lastMileTravel": 2.4,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "30-35 mins",
                                                            "lastMileTravelString": "2.4 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 22:30:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                                        "description": "OnlyOnSwiggy"
                                                                  },
                                                                  {
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                        "description": "pureveg"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "OnlyOnSwiggy",
                                                                                          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "pureveg",
                                                                                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹69"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.1",
                                                                  "ratingCount": "10K+"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-shanti-nagar-rest12808",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "822315",
                                                      "name": "Subway",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/f87555d8-a964-4ca5-b2fc-5376287bb587_822315.jpg",
                                                      "locality": "Langford Road",
                                                      "areaName": "Richmond Town",
                                                      "costForTwo": "₹350 for two",
                                                      "cuisines": [
                                                            "Salads",
                                                            "Snacks",
                                                            "Desserts",
                                                            "Beverages"
                                                      ],
                                                      "avgRating": 4.4,
                                                      "parentId": "2",
                                                      "avgRatingString": "4.4",
                                                      "totalRatingsString": "460",
                                                      "sla": {
                                                            "deliveryTime": 20,
                                                            "lastMileTravel": 2.1,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "20-25 mins",
                                                            "lastMileTravelString": "2.1 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-29 01:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                                                        "description": "Delivery!"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹119"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/subway-langford-road-richmond-town-rest822315",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "6924",
                                                      "name": "FreshMenu",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/6d758a42-634e-4b3e-809f-876d0ee8e44a_6924.JPG",
                                                      "locality": "Johnson Market",
                                                      "areaName": "Richmond Road",
                                                      "costForTwo": "₹250 for two",
                                                      "cuisines": [
                                                            "Continental",
                                                            "Chinese",
                                                            "Oriental",
                                                            "Asian",
                                                            "Healthy Food",
                                                            "Fast Food",
                                                            "Indian",
                                                            "Desserts"
                                                      ],
                                                      "avgRating": 4.4,
                                                      "parentId": "398",
                                                      "avgRatingString": "4.4",
                                                      "totalRatingsString": "58K+",
                                                      "sla": {
                                                            "deliveryTime": 35,
                                                            "lastMileTravel": 2.7,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "35-40 mins",
                                                            "lastMileTravelString": "2.7 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹100"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/freshmenu-johnson-market-richmond-road-rest6924",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "124178",
                                                      "name": "Starbucks Coffee",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/8dd62a78-5b52-4f5a-8842-c9f76da959d1_124178.JPG",
                                                      "locality": "Lavelle Road",
                                                      "areaName": "Lavelle Road",
                                                      "costForTwo": "₹400 for two",
                                                      "cuisines": [
                                                            "Beverages",
                                                            "Cafe",
                                                            "Snacks",
                                                            "Desserts",
                                                            "Bakery",
                                                            "Ice Cream"
                                                      ],
                                                      "avgRating": 4.6,
                                                      "parentId": "195515",
                                                      "avgRatingString": "4.6",
                                                      "totalRatingsString": "2.2K+",
                                                      "sla": {
                                                            "deliveryTime": 22,
                                                            "lastMileTravel": 2.3,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "20-25 mins",
                                                            "lastMileTravelString": "2.3 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "30% OFF",
                                                            "subHeader": "UPTO ₹75"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.5",
                                                                  "ratingCount": "1.9K+"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-lavelle-road-rest124178",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "69274",
                                                      "name": "Chai Point",
                                                      "cloudinaryImageId": "zoc6jrwby69bpa8qzcxc",
                                                      "locality": "Ashok Nagar",
                                                      "areaName": "Ashok Nagar",
                                                      "costForTwo": "₹150 for two",
                                                      "cuisines": [
                                                            "Bakery",
                                                            "Beverages",
                                                            "Maharashtrian",
                                                            "Snacks",
                                                            "Street Food",
                                                            "South Indian",
                                                            "Punjabi",
                                                            "Chaat",
                                                            "Indian",
                                                            "American",
                                                            "Fast Food",
                                                            "Desserts",
                                                            "Cafe",
                                                            "Healthy Food",
                                                            "Home Food",
                                                            "North Indian"
                                                      ],
                                                      "avgRating": 4.6,
                                                      "parentId": "1607",
                                                      "avgRatingString": "4.6",
                                                      "totalRatingsString": "9.4K+",
                                                      "sla": {
                                                            "deliveryTime": 31,
                                                            "lastMileTravel": 3.5,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "30-35 mins",
                                                            "lastMileTravelString": "3.5 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                                                        "description": "Delivery!"
                                                                  }
                                                            ],
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹199"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.1",
                                                                  "ratingCount": "1.4K+"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/chai-point-ashok-nagar-rest69274",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "43836",
                                                      "name": "McDonald's",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
                                                      "locality": "MG Road",
                                                      "areaName": "Ashok Nagar",
                                                      "costForTwo": "₹400 for two",
                                                      "cuisines": [
                                                            "Burgers",
                                                            "Beverages",
                                                            "Cafe",
                                                            "Desserts"
                                                      ],
                                                      "avgRating": 4.4,
                                                      "parentId": "630",
                                                      "avgRatingString": "4.4",
                                                      "totalRatingsString": "25K+",
                                                      "sla": {
                                                            "deliveryTime": 24,
                                                            "lastMileTravel": 2.5,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "20-25 mins",
                                                            "lastMileTravelString": "2.5 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-29 02:45:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                                        "description": "Delivery!"
                                                                  }
                                                            ],
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "77949",
                                                      "name": "Burger King",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
                                                      "locality": "Gandhi Bazar",
                                                      "areaName": "Basavanagudi",
                                                      "costForTwo": "₹350 for two",
                                                      "cuisines": [
                                                            "Burgers",
                                                            "American"
                                                      ],
                                                      "avgRating": 4.3,
                                                      "parentId": "166",
                                                      "avgRatingString": "4.3",
                                                      "totalRatingsString": "32K+",
                                                      "sla": {
                                                            "deliveryTime": 38,
                                                            "lastMileTravel": 3,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "35-40 mins",
                                                            "lastMileTravelString": "3.0 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                                        "description": "Delivery!"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "60% OFF",
                                                            "subHeader": "UPTO ₹120"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "48230",
                                                      "name": "Kanti Sweets",
                                                      "cloudinaryImageId": "u0hhfifwmpsnobytv2yf",
                                                      "locality": "Brigade Road",
                                                      "areaName": "Central Bangalore",
                                                      "costForTwo": "₹150 for two",
                                                      "cuisines": [
                                                            "Sweets"
                                                      ],
                                                      "avgRating": 4.7,
                                                      "veg": true,
                                                      "parentId": "4700",
                                                      "avgRatingString": "4.7",
                                                      "totalRatingsString": "5.8K+",
                                                      "sla": {
                                                            "deliveryTime": 25,
                                                            "lastMileTravel": 3,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "20-25 mins",
                                                            "lastMileTravelString": "3.0 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 22:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                        "description": "pureveg"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "pureveg",
                                                                                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.1",
                                                                  "ratingCount": "1.8K+"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-brigade-road-central-bangalore-rest48230",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "593",
                                                      "name": "Anand Sweets & Savouries",
                                                      "cloudinaryImageId": "8d786951646dc137f9bf859727f90391",
                                                      "locality": "4th Block",
                                                      "areaName": "Jayanagar",
                                                      "costForTwo": "₹300 for two",
                                                      "cuisines": [
                                                            "Sweets",
                                                            "Chaat",
                                                            "Snacks",
                                                            "Desserts",
                                                            "North Indian"
                                                      ],
                                                      "avgRating": 4.7,
                                                      "veg": true,
                                                      "parentId": "53",
                                                      "avgRatingString": "4.7",
                                                      "totalRatingsString": "24K+",
                                                      "sla": {
                                                            "deliveryTime": 29,
                                                            "lastMileTravel": 4,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "25-30 mins",
                                                            "lastMileTravelString": "4.0 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 22:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                        "description": "pureveg"
                                                                  }
                                                            ],
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "pureveg",
                                                                                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/anand-sweets-and-savouries-4th-block-jayanagar-rest593",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "32059",
                                                      "name": "Cafe Coffee Day",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/f5acacd4-a1ce-4353-8647-bb331822da4d_32059.jpg",
                                                      "locality": "2ND BLOCK",
                                                      "areaName": "Jayanagar",
                                                      "costForTwo": "₹400 for two",
                                                      "cuisines": [
                                                            "Beverages",
                                                            "Cafe",
                                                            "Snacks",
                                                            "Desserts",
                                                            "Burgers",
                                                            "Ice Cream",
                                                            "Bakery",
                                                            "Fast Food"
                                                      ],
                                                      "avgRating": 4.5,
                                                      "parentId": "1",
                                                      "avgRatingString": "4.5",
                                                      "totalRatingsString": "1.2K+",
                                                      "sla": {
                                                            "deliveryTime": 33,
                                                            "lastMileTravel": 3,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "30-35 mins",
                                                            "lastMileTravelString": "3.0 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:45:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹159"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.0",
                                                                  "ratingCount": "2.2K+"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/cafe-coffee-day-2nd-block-jayanagar-rest32059",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "396750",
                                                      "name": "The Biryani Life",
                                                      "cloudinaryImageId": "wvjsuvqrd6ahqqyhmnrt",
                                                      "locality": "Residency Road",
                                                      "areaName": "Shantinagar",
                                                      "costForTwo": "₹250 for two",
                                                      "cuisines": [
                                                            "Biryani",
                                                            "Mughlai",
                                                            "Lucknowi",
                                                            "Hyderabadi",
                                                            "Kebabs",
                                                            "Desserts",
                                                            "Beverages"
                                                      ],
                                                      "avgRating": 3.9,
                                                      "parentId": "8496",
                                                      "avgRatingString": "3.9",
                                                      "totalRatingsString": "336",
                                                      "sla": {
                                                            "deliveryTime": 39,
                                                            "lastMileTravel": 1.7,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "35-40 mins",
                                                            "lastMileTravelString": "1.7 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {

                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹159"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/the-biryani-life-residency-road-shantinagar-rest396750",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "396748",
                                                      "name": "The Good Bowl",
                                                      "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
                                                      "locality": "Residency Road",
                                                      "areaName": "Shantinagar",
                                                      "costForTwo": "₹400 for two",
                                                      "cuisines": [
                                                            "Biryani",
                                                            "Pastas",
                                                            "Punjabi",
                                                            "Desserts",
                                                            "Beverages"
                                                      ],
                                                      "avgRating": 4.4,
                                                      "parentId": "7918",
                                                      "avgRatingString": "4.4",
                                                      "totalRatingsString": "752",
                                                      "sla": {
                                                            "deliveryTime": 40,
                                                            "lastMileTravel": 1.7,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "40-45 mins",
                                                            "lastMileTravelString": "1.7 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹149"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-residency-road-shantinagar-rest396748",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "396746",
                                                      "name": "Sweet Truth - Cake and Desserts",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/b45b7793-6863-4472-a1a7-081c12c478fd_396746.JPG",
                                                      "locality": "Residency Road",
                                                      "areaName": "Shantinagar",
                                                      "costForTwo": "₹450 for two",
                                                      "cuisines": [
                                                            "Desserts",
                                                            "Bakery",
                                                            "Ice Cream",
                                                            "Snacks"
                                                      ],
                                                      "avgRating": 4.3,
                                                      "parentId": "4444",
                                                      "avgRatingString": "4.3",
                                                      "totalRatingsString": "206",
                                                      "sla": {
                                                            "deliveryTime": 36,
                                                            "lastMileTravel": 1.7,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "35-40 mins",
                                                            "lastMileTravelString": "1.7 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {

                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "ITEMS",
                                                            "subHeader": "AT ₹79"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-residency-road-shantinagar-rest396746",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "470494",
                                                      "name": "Mad Over Donuts",
                                                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/27/1a95db76-c67f-4efd-8c59-a7fbf10dbb85_470494.jpg",
                                                      "locality": "RV Road",
                                                      "areaName": "Basavanagudi",
                                                      "costForTwo": "₹200 for two",
                                                      "cuisines": [
                                                            "Desserts"
                                                      ],
                                                      "avgRating": 4.5,
                                                      "veg": true,
                                                      "parentId": "611",
                                                      "avgRatingString": "4.5",
                                                      "totalRatingsString": "383",
                                                      "sla": {
                                                            "deliveryTime": 31,
                                                            "lastMileTravel": 2.7,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "30-35 mins",
                                                            "lastMileTravelString": "2.7 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                                                        "description": "Delivery!"
                                                                  },
                                                                  {
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                                        "description": "pureveg"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Delivery!",
                                                                                          "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                                                    }
                                                                              },
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "pureveg",
                                                                                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "50% OFF",
                                                            "subHeader": "UPTO ₹100",
                                                            "discountTag": "POCKET HERO"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/mad-over-donuts-rv-road-basavanagudi-rest470494",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "396753",
                                                      "name": "Wendy's Burgers",
                                                      "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
                                                      "locality": "KMK Towers",
                                                      "areaName": "Residency Road",
                                                      "costForTwo": "₹200 for two",
                                                      "cuisines": [
                                                            "Burgers",
                                                            "American",
                                                            "Fast Food",
                                                            "Snacks",
                                                            "Beverages"
                                                      ],
                                                      "avgRating": 4.2,
                                                      "parentId": "972",
                                                      "avgRatingString": "4.2",
                                                      "totalRatingsString": "2.1K+",
                                                      "sla": {
                                                            "deliveryTime": 28,
                                                            "lastMileTravel": 1.3,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "25-30 mins",
                                                            "lastMileTravelString": "1.3 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:59:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "textExtendedBadges": [
                                                                  {
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available",
                                                                        "fontColor": "#7E808C"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {

                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "",
                                                                                          "fontColor": "#7E808C",
                                                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                                                          "shortDescription": "options available"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  }
                                                            }
                                                      },
                                                      "aggregatedDiscountInfoV3": {
                                                            "header": "40% OFF",
                                                            "subHeader": "UPTO ₹80"
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "--"
                                                            }
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-kmk-towers-residency-road-rest396753",
                                                      "type": "WEBLINK"
                                                }
                                          },
                                          {
                                                "info": {
                                                      "id": "49840",
                                                      "name": "Ibaco",
                                                      "cloudinaryImageId": "bffqah0xyc3siovfavcm",
                                                      "locality": "Basavanagudi",
                                                      "areaName": "Basavanagudi",
                                                      "costForTwo": "₹800 for two",
                                                      "cuisines": [
                                                            "Desserts"
                                                      ],
                                                      "avgRating": 4.7,
                                                      "veg": true,
                                                      "parentId": "3481",
                                                      "avgRatingString": "4.7",
                                                      "totalRatingsString": "626",
                                                      "sla": {
                                                            "deliveryTime": 24,
                                                            "lastMileTravel": 2,
                                                            "serviceability": "SERVICEABLE",
                                                            "slaString": "20-25 mins",
                                                            "lastMileTravelString": "2.0 km",
                                                            "iconType": "ICON_TYPE_EMPTY"
                                                      },
                                                      "availability": {
                                                            "nextCloseTime": "2024-09-28 23:00:00",
                                                            "opened": true
                                                      },
                                                      "badges": {
                                                            "imageBadges": [
                                                                  {
                                                                        "imageId": "newg.png",
                                                                        "description": "Gourmet"
                                                                  }
                                                            ]
                                                      },
                                                      "isOpen": true,
                                                      "type": "F",
                                                      "badgesV2": {
                                                            "entityBadges": {
                                                                  "imageBased": {
                                                                        "badgeObject": [
                                                                              {
                                                                                    "attributes": {
                                                                                          "description": "Gourmet",
                                                                                          "imageId": "newg.png"
                                                                                    }
                                                                              }
                                                                        ]
                                                                  },
                                                                  "textBased": {

                                                                  },
                                                                  "textExtendedBadges": {

                                                                  }
                                                            }
                                                      },
                                                      "loyaltyDiscoverPresentationInfo": {
                                                            "logoCtx": {
                                                                  "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                                                            },
                                                            "freedelMessage": "FREE DELIVERY",
                                                            "badgeType": "BADGE_TYPE_ONE_LITE"
                                                      },
                                                      "differentiatedUi": {
                                                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                            "differentiatedUiMediaDetails": {
                                                                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                                  "lottie": {

                                                                  },
                                                                  "video": {

                                                                  }
                                                            }
                                                      },
                                                      "reviewsSummary": {

                                                      },
                                                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                      "restaurantOfferPresentationInfo": {

                                                      },
                                                      "externalRatings": {
                                                            "aggregatedRating": {
                                                                  "rating": "4.1",
                                                                  "ratingCount": "401"
                                                            },
                                                            "source": "GOOGLE",
                                                            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                                      },
                                                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                                },
                                                "analytics": {

                                                },
                                                "cta": {
                                                      "link": "https://www.swiggy.com/city/bangalore/ibaco-basavanagudi-rest49840",
                                                      "type": "WEBLINK"
                                                }
                                          }
                                    ],
                                    "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                                    "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                                    "style": {
                                          "width": {
                                                "type": "TYPE_RELATIVE",
                                                "value": 0.41111112,
                                                "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                                          },
                                          "height": {
                                                "type": "TYPE_RELATIVE",
                                                "value": 0.7027027,
                                                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                          },
                                          "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                                    },
                                    "collectionId": "84124"
                              }
                        }
                  }
            }
      }
];

const NavBar = () => {
      return (
            <div className="container">
                  <div className="logo-container">
                        <img className="logo" src="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw" alt="Swiggy" />
                  </div>
                  <div className="nav-items">
                        <ul>
                              <li>Home</li>
                              <li>Contacts</li>
                              <li>Profile</li>
                              <li>Log Out</li>
                        </ul>
                  </div>
            </div>
      )
}

const RestarandCard = (props) => {
      const { img, resName, cuisines, rating, deliveryTime } = props;
      return (
            <div className="card-container">
                  <img className="res-logo" src={img} alt="Swiggy" />
                  <h3>{resName}</h3>
                  <h4>{cuisines}</h4>
                  <h4>{rating}</h4>
                  <h4>{deliveryTime}</h4>
            </div>
      )
}

const AppComponent = () => {
      const restaurentData = data[0].card.card.gridElements.infoWithStyle.restaurants;
      return (
            <div>
                  <NavBar />
                  <div className="res-containter">
                        {restaurentData.map((restaurant) => (
                              <RestarandCard
                                    key={restaurant.info.id}
                                    img="https://imgs.search.brave.com/rOLwQJEuFtyT2OvPZ-mKNBK1MAlGXmWrt1SlfumyaQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWFnZXNmcmVlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU3dp/Z2d5LUxvZ28tUE5H/LnBuZw"
                                    resName={restaurant.info.name}
                                    cuisines={restaurant.info.cuisines.join(", ")}
                                    rating={restaurant.info.avgRating}
                                    deliveryTime={restaurant.info.sla.deliveryTime}
                              />
                        ))}
                  </div>
            </div>
      )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppComponent />);

