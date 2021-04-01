import { ResponsiveBubbleHtml } from '@nivo/circle-packing'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const DepartmentsBubble = ({ root /* see root tab */ }) => (
    <ResponsiveBubbleHtml
        root={{
            "name": "nivo",
            "color": "hsl(279, 70%, 50%)",
            "children": [
              {
                "name": "viz",
                "color": "hsl(123, 70%, 50%)",
                "children": [
                  {
                    "name": "stack",
                    "color": "hsl(349, 70%, 50%)",
                    "children": [
                      {
                        "name": "cchart",
                        "color": "hsl(261, 70%, 50%)",
                        "loc": 159634
                      },
                      {
                        "name": "xAxis",
                        "color": "hsl(76, 70%, 50%)",
                        "loc": 14789
                      },
                      {
                        "name": "yAxis",
                        "color": "hsl(298, 70%, 50%)",
                        "loc": 193511
                      },
                      {
                        "name": "layers",
                        "color": "hsl(89, 70%, 50%)",
                        "loc": 149905
                      }
                    ]
                  },
                  {
                    "name": "ppie",
                    "color": "hsl(259, 70%, 50%)",
                    "children": [
                      {
                        "name": "chart",
                        "color": "hsl(158, 70%, 50%)",
                        "children": [
                          {
                            "name": "pie",
                            "color": "hsl(228, 70%, 50%)",
                            "children": [
                              {
                                "name": "outline",
                                "color": "hsl(45, 70%, 50%)",
                                "loc": 170466
                              },
                              {
                                "name": "slices",
                                "color": "hsl(132, 70%, 50%)",
                                "loc": 138775
                              },
                              {
                                "name": "bbox",
                                "color": "hsl(198, 70%, 50%)",
                                "loc": 136222
                              }
                            ]
                          },
                          {
                            "name": "donut",
                            "color": "hsl(184, 70%, 50%)",
                            "loc": 101680
                          },
                          {
                            "name": "gauge",
                            "color": "hsl(266, 70%, 50%)",
                            "loc": 64234
                          }
                        ]
                      },
                      {
                        "name": "legends",
                        "color": "hsl(260, 70%, 50%)",
                        "loc": 55474
                      }
                    ]
                  }
                ]
              },
              {
                "name": "colors",
                "color": "hsl(359, 70%, 50%)",
                "children": [
                  {
                    "name": "rgb",
                    "color": "hsl(39, 70%, 50%)",
                    "loc": 98989
                  },
                  {
                    "name": "hsl",
                    "color": "hsl(145, 70%, 50%)",
                    "loc": 3657
                  }
                ]
              },
              {
                "name": "utils",
                "color": "hsl(206, 70%, 50%)",
                "children": [
                  {
                    "name": "randomize",
                    "color": "hsl(263, 70%, 50%)",
                    "loc": 187002
                  },
                  {
                    "name": "resetClock",
                    "color": "hsl(90, 70%, 50%)",
                    "loc": 42641
                  },
                  {
                    "name": "noop",
                    "color": "hsl(75, 70%, 50%)",
                    "loc": 38037
                  },
                  {
                    "name": "tick",
                    "color": "hsl(35, 70%, 50%)",
                    "loc": 75209
                  },
                  {
                    "name": "forceGC",
                    "color": "hsl(55, 70%, 50%)",
                    "loc": 74930
                  },
                  {
                    "name": "stackTrace",
                    "color": "hsl(144, 70%, 50%)",
                    "loc": 152230
                  },
                  {
                    "name": "dbg",
                    "color": "hsl(23, 70%, 50%)",
                    "loc": 111280
                  }
                ]
              },
              {
                "name": "generators",
                "color": "hsl(297, 70%, 50%)",
                "children": [
                  {
                    "name": "address",
                    "color": "hsl(64, 70%, 50%)",
                    "loc": 11228
                  },
                  {
                    "name": "city",
                    "color": "hsl(104, 70%, 50%)",
                    "loc": 76430
                  },
                  {
                    "name": "animal",
                    "color": "hsl(292, 70%, 50%)",
                    "loc": 142723
                  },
                  {
                    "name": "movie",
                    "color": "hsl(290, 70%, 50%)",
                    "loc": 33053
                  },
                  {
                    "name": "user",
                    "color": "hsl(226, 70%, 50%)",
                    "loc": 4234
                  }
                ]
              },
              {
                "name": "set",
                "color": "hsl(99, 70%, 50%)",
                "children": [
                  {
                    "name": "clone",
                    "color": "hsl(325, 70%, 50%)",
                    "loc": 129992
                  },
                  {
                    "name": "intersect",
                    "color": "hsl(14, 70%, 50%)",
                    "loc": 179219
                  },
                  {
                    "name": "merge",
                    "color": "hsl(269, 70%, 50%)",
                    "loc": 85976
                  },
                  {
                    "name": "reverse",
                    "color": "hsl(106, 70%, 50%)",
                    "loc": 68739
                  },
                  {
                    "name": "toArray",
                    "color": "hsl(4, 70%, 50%)",
                    "loc": 197723
                  },
                  {
                    "name": "toObject",
                    "color": "hsl(121, 70%, 50%)",
                    "loc": 97356
                  },
                  {
                    "name": "fromCSV",
                    "color": "hsl(61, 70%, 50%)",
                    "loc": 130809
                  },
                  {
                    "name": "slice",
                    "color": "hsl(66, 70%, 50%)",
                    "loc": 183642
                  },
                  {
                    "name": "append",
                    "color": "hsl(11, 70%, 50%)",
                    "loc": 176798
                  },
                  {
                    "name": "prepend",
                    "color": "hsl(350, 70%, 50%)",
                    "loc": 168303
                  },
                  {
                    "name": "shuffle",
                    "color": "hsl(286, 70%, 50%)",
                    "loc": 147917
                  },
                  {
                    "name": "pick",
                    "color": "hsl(297, 70%, 50%)",
                    "loc": 150935
                  },
                  {
                    "name": "plouc",
                    "color": "hsl(170, 70%, 50%)",
                    "loc": 54383
                  }
                ]
              },
              {
                "name": "text",
                "color": "hsl(237, 70%, 50%)",
                "children": [
                  {
                    "name": "trim",
                    "color": "hsl(200, 70%, 50%)",
                    "loc": 199055
                  },
                  {
                    "name": "slugify",
                    "color": "hsl(350, 70%, 50%)",
                    "loc": 139704
                  },
                  {
                    "name": "snakeCase",
                    "color": "hsl(279, 70%, 50%)",
                    "loc": 94400
                  },
                  {
                    "name": "camelCase",
                    "color": "hsl(41, 70%, 50%)",
                    "loc": 97781
                  },
                  {
                    "name": "repeat",
                    "color": "hsl(158, 70%, 50%)",
                    "loc": 157369
                  },
                  {
                    "name": "padLeft",
                    "color": "hsl(248, 70%, 50%)",
                    "loc": 184778
                  },
                  {
                    "name": "padRight",
                    "color": "hsl(100, 70%, 50%)",
                    "loc": 103134
                  },
                  {
                    "name": "sanitize",
                    "color": "hsl(96, 70%, 50%)",
                    "loc": 27442
                  },
                  {
                    "name": "ploucify",
                    "color": "hsl(157, 70%, 50%)",
                    "loc": 130373
                  }
                ]
              },
              {
                "name": "misc",
                "color": "hsl(10, 70%, 50%)",
                "children": [
                  {
                    "name": "greetings",
                    "color": "hsl(28, 70%, 50%)",
                    "children": [
                      {
                        "name": "hey",
                        "color": "hsl(108, 70%, 50%)",
                        "loc": 105846
                      },
                      {
                        "name": "HOWDY",
                        "color": "hsl(189, 70%, 50%)",
                        "loc": 161997
                      },
                      {
                        "name": "aloha",
                        "color": "hsl(259, 70%, 50%)",
                        "loc": 81354
                      },
                      {
                        "name": "AHOY",
                        "color": "hsl(24, 70%, 50%)",
                        "loc": 38636
                      }
                    ]
                  },
                  {
                    "name": "other",
                    "color": "hsl(246, 70%, 50%)",
                    "loc": 52492
                  },
                  {
                    "name": "path",
                    "color": "hsl(15, 70%, 50%)",
                    "children": [
                      {
                        "name": "pathA",
                        "color": "hsl(355, 70%, 50%)",
                        "loc": 91959
                      },
                      {
                        "name": "pathB",
                        "color": "hsl(237, 70%, 50%)",
                        "children": [
                          {
                            "name": "pathB1",
                            "color": "hsl(87, 70%, 50%)",
                            "loc": 100693
                          },
                          {
                            "name": "pathB2",
                            "color": "hsl(30, 70%, 50%)",
                            "loc": 170400
                          },
                          {
                            "name": "pathB3",
                            "color": "hsl(135, 70%, 50%)",
                            "loc": 142923
                          },
                          {
                            "name": "pathB4",
                            "color": "hsl(25, 70%, 50%)",
                            "loc": 103327
                          }
                        ]
                      },
                      {
                        "name": "pathC",
                        "color": "hsl(113, 70%, 50%)",
                        "children": [
                          {
                            "name": "pathC1",
                            "color": "hsl(321, 70%, 50%)",
                            "loc": 50624
                          },
                          {
                            "name": "pathC2",
                            "color": "hsl(53, 70%, 50%)",
                            "loc": 147094
                          },
                          {
                            "name": "pathC3",
                            "color": "hsl(74, 70%, 50%)",
                            "loc": 66225
                          },
                          {
                            "name": "pathC4",
                            "color": "hsl(5, 70%, 50%)",
                            "loc": 138855
                          },
                          {
                            "name": "pathC5",
                            "color": "hsl(115, 70%, 50%)",
                            "loc": 102204
                          },
                          {
                            "name": "pathC6",
                            "color": "hsl(195, 70%, 50%)",
                            "loc": 110718
                          },
                          {
                            "name": "pathC7",
                            "color": "hsl(180, 70%, 50%)",
                            "loc": 109392
                          },
                          {
                            "name": "pathC8",
                            "color": "hsl(273, 70%, 50%)",
                            "loc": 113991
                          },
                          {
                            "name": "pathC9",
                            "color": "hsl(49, 70%, 50%)",
                            "loc": 115779
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        colors={{ scheme: 'paired' }}
        labelSkipRadius={20}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
        animate={true}
        motionStiffness={90}
        motionDamping={20}
    />
)

export default DepartmentsBubble;
