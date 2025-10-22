import { db } from "@/firebaseConfig";
import { Phase } from "@/types/firestore-types";
import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Test() {
  const [hover, setHover] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onHoverIn={() => setHover(true)}
        onHoverOut={() => setHover(false)}
        style={{
          backgroundColor: hover ? "gray" : "black",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={async () => {
          await uploadPhases(phases).catch(console.error);
        }}
      >
        <Text style={{ color: hover ? "black" : "white" }}>Hello World</Text>
      </Pressable>
    </View>
  );
}

async function uploadPhases(phasesObj) {
  for (const [phaseId, phaseData] of Object.entries(phasesObj)) {
    // Reference to phase document
    const phaseRef = doc(db, "phases", phaseId);

    // Save phase document WITHOUT blocks (only max_blocks)
    await setDoc(phaseRef, { max_blocks: phaseData.max_blocks });

    // Reference to blocks subcollection
    const blocksColRef = collection(phaseRef, "blocks");

    for (const [blockId, blockData] of Object.entries(phaseData.blocks)) {
      // Reference to block doc inside blocks subcollection
      const blockRef = doc(blocksColRef, blockId);

      // Save block doc WITHOUT plots (only max_plots)
      await setDoc(blockRef, { max_plots: blockData.max_plots });

      // Reference to plots subcollection inside this block
      const plotsColRef = collection(blockRef, "plots");

      for (const [plotId, plotData] of Object.entries(blockData.plots)) {
        const plotRef = doc(plotsColRef, plotId);
        await setDoc(plotRef, plotData);
      }
    }
  }

  console.log("✅ Phases, blocks, and plots uploaded successfully!");
}

const phases: Record<string, Phase> = {
  no_phase: {
    max_blocks: 16,
    blocks: {
      block_1: {
        max_plots: 10,
        plots: {
          nph_blk1_plot_1: {
            grid_coordinates: [0, 71],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk1_plot_2: {
            grid_coordinates: [94, 65],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk1_plot_3: {
            grid_coordinates: [62, 82],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk1_plot_4: {
            grid_coordinates: [73, 58],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk1_plot_5: {
            grid_coordinates: [17, 42],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk1_plot_6: {
            grid_coordinates: [68, 44],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk1_plot_7: {
            grid_coordinates: [94, 6],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk1_plot_8: {
            grid_coordinates: [50, 7],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk1_plot_9: {
            grid_coordinates: [54, 62],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk1_plot_10: {
            grid_coordinates: [5, 2],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk1_plot_11: {
            grid_coordinates: [44, 31],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk1_plot_12: {
            grid_coordinates: [96, 21],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_2: {
        max_plots: 10,
        plots: {
          nph_blk2_plot_1: {
            grid_coordinates: [73, 89],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk2_plot_2: {
            grid_coordinates: [9, 18],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk2_plot_3: {
            grid_coordinates: [4, 86],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk2_plot_4: {
            grid_coordinates: [3, 26],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk2_plot_5: {
            grid_coordinates: [43, 24],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk2_plot_6: {
            grid_coordinates: [96, 39],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk2_plot_7: {
            grid_coordinates: [74, 43],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk2_plot_8: {
            grid_coordinates: [39, 7],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk2_plot_9: {
            grid_coordinates: [68, 70],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk2_plot_10: {
            grid_coordinates: [96, 27],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk2_plot_11: {
            grid_coordinates: [23, 76],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk2_plot_12: {
            grid_coordinates: [65, 3],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_3: {
        max_plots: 10,
        plots: {
          nph_blk3_plot_1: {
            grid_coordinates: [62, 67],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk3_plot_2: {
            grid_coordinates: [87, 63],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk3_plot_3: {
            grid_coordinates: [13, 58],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk3_plot_4: {
            grid_coordinates: [98, 64],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk3_plot_5: {
            grid_coordinates: [75, 63],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk3_plot_6: {
            grid_coordinates: [99, 78],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk3_plot_7: {
            grid_coordinates: [10, 18],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk3_plot_8: {
            grid_coordinates: [63, 2],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk3_plot_9: {
            grid_coordinates: [5, 81],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk3_plot_10: {
            grid_coordinates: [10, 28],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_4: {
        max_plots: 10,
        plots: {
          nph_blk4_plot_1: {
            grid_coordinates: [54, 85],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk4_plot_2: {
            grid_coordinates: [49, 11],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk4_plot_3: {
            grid_coordinates: [41, 88],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk4_plot_4: {
            grid_coordinates: [53, 65],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk4_plot_5: {
            grid_coordinates: [20, 17],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk4_plot_6: {
            grid_coordinates: [97, 59],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk4_plot_7: {
            grid_coordinates: [62, 64],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk4_plot_8: {
            grid_coordinates: [7, 30],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk4_plot_9: {
            grid_coordinates: [50, 27],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk4_plot_10: {
            grid_coordinates: [1, 9],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk4_plot_11: {
            grid_coordinates: [70, 48],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk4_plot_12: {
            grid_coordinates: [6, 47],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_5: {
        max_plots: 10,
        plots: {
          nph_blk5_plot_1: {
            grid_coordinates: [34, 86],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk5_plot_2: {
            grid_coordinates: [22, 51],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk5_plot_3: {
            grid_coordinates: [22, 78],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk5_plot_4: {
            grid_coordinates: [35, 99],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk5_plot_5: {
            grid_coordinates: [86, 59],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk5_plot_6: {
            grid_coordinates: [58, 63],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk5_plot_7: {
            grid_coordinates: [81, 58],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk5_plot_8: {
            grid_coordinates: [80, 96],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk5_plot_9: {
            grid_coordinates: [53, 8],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk5_plot_10: {
            grid_coordinates: [93, 94],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk5_plot_11: {
            grid_coordinates: [33, 85],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk5_plot_12: {
            grid_coordinates: [67, 72],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk5_plot_13: {
            grid_coordinates: [84, 98],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk5_plot_14: {
            grid_coordinates: [39, 36],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk5_plot_15: {
            grid_coordinates: [94, 83],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_6: {
        max_plots: 10,
        plots: {
          nph_blk6_plot_1: {
            grid_coordinates: [35, 47],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk6_plot_2: {
            grid_coordinates: [87, 67],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk6_plot_3: {
            grid_coordinates: [53, 53],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk6_plot_4: {
            grid_coordinates: [34, 38],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk6_plot_5: {
            grid_coordinates: [98, 6],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk6_plot_6: {
            grid_coordinates: [33, 38],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk6_plot_7: {
            grid_coordinates: [86, 90],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk6_plot_8: {
            grid_coordinates: [22, 88],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk6_plot_9: {
            grid_coordinates: [29, 23],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk6_plot_10: {
            grid_coordinates: [69, 36],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk6_plot_11: {
            grid_coordinates: [95, 78],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk6_plot_12: {
            grid_coordinates: [43, 83],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk6_plot_13: {
            grid_coordinates: [73, 23],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_7: {
        max_plots: 10,
        plots: {
          nph_blk7_plot_1: {
            grid_coordinates: [2, 46],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_2: {
            grid_coordinates: [56, 52],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_3: {
            grid_coordinates: [50, 94],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk7_plot_4: {
            grid_coordinates: [74, 46],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk7_plot_5: {
            grid_coordinates: [50, 83],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk7_plot_6: {
            grid_coordinates: [83, 84],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_7: {
            grid_coordinates: [77, 94],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk7_plot_8: {
            grid_coordinates: [34, 81],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_9: {
            grid_coordinates: [24, 83],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk7_plot_10: {
            grid_coordinates: [4, 54],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk7_plot_11: {
            grid_coordinates: [9, 56],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_12: {
            grid_coordinates: [25, 5],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_13: {
            grid_coordinates: [22, 60],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk7_plot_14: {
            grid_coordinates: [82, 36],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk7_plot_15: {
            grid_coordinates: [53, 63],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk7_plot_16: {
            grid_coordinates: [20, 62],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_8: {
        max_plots: 10,
        plots: {
          nph_blk8_plot_1: {
            grid_coordinates: [48, 31],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk8_plot_2: {
            grid_coordinates: [49, 89],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk8_plot_3: {
            grid_coordinates: [14, 13],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk8_plot_4: {
            grid_coordinates: [5, 22],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk8_plot_5: {
            grid_coordinates: [62, 61],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk8_plot_6: {
            grid_coordinates: [14, 20],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk8_plot_7: {
            grid_coordinates: [58, 40],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk8_plot_8: {
            grid_coordinates: [99, 67],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_9: {
        max_plots: 10,
        plots: {
          nph_blk9_plot_1: {
            grid_coordinates: [47, 33],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk9_plot_2: {
            grid_coordinates: [86, 39],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk9_plot_3: {
            grid_coordinates: [2, 43],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk9_plot_4: {
            grid_coordinates: [32, 84],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk9_plot_5: {
            grid_coordinates: [69, 20],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk9_plot_6: {
            grid_coordinates: [98, 7],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk9_plot_7: {
            grid_coordinates: [16, 41],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk9_plot_8: {
            grid_coordinates: [15, 63],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk9_plot_9: {
            grid_coordinates: [40, 17],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk9_plot_10: {
            grid_coordinates: [87, 25],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk9_plot_11: {
            grid_coordinates: [44, 22],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk9_plot_12: {
            grid_coordinates: [65, 33],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk9_plot_13: {
            grid_coordinates: [54, 7],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk9_plot_14: {
            grid_coordinates: [38, 43],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk9_plot_15: {
            grid_coordinates: [37, 0],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_10: {
        max_plots: 10,
        plots: {
          nph_blk10_plot_1: {
            grid_coordinates: [24, 27],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_2: {
            grid_coordinates: [13, 14],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_3: {
            grid_coordinates: [61, 78],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_4: {
            grid_coordinates: [28, 44],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_5: {
            grid_coordinates: [15, 5],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_6: {
            grid_coordinates: [64, 0],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk10_plot_7: {
            grid_coordinates: [0, 62],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk10_plot_8: {
            grid_coordinates: [0, 41],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk10_plot_9: {
            grid_coordinates: [30, 28],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_10: {
            grid_coordinates: [70, 30],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk10_plot_11: {
            grid_coordinates: [42, 32],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk10_plot_12: {
            grid_coordinates: [45, 28],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk10_plot_13: {
            grid_coordinates: [65, 64],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_11: {
        max_plots: 10,
        plots: {
          nph_blk11_plot_1: {
            grid_coordinates: [58, 51],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk11_plot_2: {
            grid_coordinates: [58, 73],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk11_plot_3: {
            grid_coordinates: [4, 81],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk11_plot_4: {
            grid_coordinates: [64, 51],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk11_plot_5: {
            grid_coordinates: [28, 67],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk11_plot_6: {
            grid_coordinates: [38, 39],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk11_plot_7: {
            grid_coordinates: [39, 54],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk11_plot_8: {
            grid_coordinates: [49, 98],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk11_plot_9: {
            grid_coordinates: [5, 68],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk11_plot_10: {
            grid_coordinates: [29, 50],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk11_plot_11: {
            grid_coordinates: [85, 63],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk11_plot_12: {
            grid_coordinates: [68, 36],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk11_plot_13: {
            grid_coordinates: [91, 18],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_12: {
        max_plots: 10,
        plots: {
          nph_blk12_plot_1: {
            grid_coordinates: [6, 92],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_2: {
            grid_coordinates: [93, 18],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk12_plot_3: {
            grid_coordinates: [89, 98],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_4: {
            grid_coordinates: [35, 67],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_5: {
            grid_coordinates: [24, 7],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_6: {
            grid_coordinates: [56, 30],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_7: {
            grid_coordinates: [78, 90],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_8: {
            grid_coordinates: [78, 3],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk12_plot_9: {
            grid_coordinates: [32, 75],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_10: {
            grid_coordinates: [70, 42],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk12_plot_11: {
            grid_coordinates: [28, 85],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_12: {
            grid_coordinates: [12, 2],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk12_plot_13: {
            grid_coordinates: [88, 96],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk12_plot_14: {
            grid_coordinates: [40, 3],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk12_plot_15: {
            grid_coordinates: [59, 53],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_13: {
        max_plots: 10,
        plots: {
          nph_blk13_plot_1: {
            grid_coordinates: [58, 47],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk13_plot_2: {
            grid_coordinates: [10, 41],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk13_plot_3: {
            grid_coordinates: [30, 45],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk13_plot_4: {
            grid_coordinates: [34, 17],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk13_plot_5: {
            grid_coordinates: [24, 71],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk13_plot_6: {
            grid_coordinates: [78, 45],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk13_plot_7: {
            grid_coordinates: [31, 96],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk13_plot_8: {
            grid_coordinates: [19, 13],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk13_plot_9: {
            grid_coordinates: [90, 99],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk13_plot_10: {
            grid_coordinates: [27, 48],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_14: {
        max_plots: 10,
        plots: {
          nph_blk14_plot_1: {
            grid_coordinates: [49, 17],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk14_plot_2: {
            grid_coordinates: [81, 50],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk14_plot_3: {
            grid_coordinates: [31, 24],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk14_plot_4: {
            grid_coordinates: [81, 25],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk14_plot_5: {
            grid_coordinates: [14, 79],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk14_plot_6: {
            grid_coordinates: [29, 44],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk14_plot_7: {
            grid_coordinates: [46, 30],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk14_plot_8: {
            grid_coordinates: [0, 85],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk14_plot_9: {
            grid_coordinates: [46, 94],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk14_plot_10: {
            grid_coordinates: [91, 90],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_15: {
        max_plots: 10,
        plots: {
          nph_blk15_plot_1: {
            grid_coordinates: [34, 4],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk15_plot_2: {
            grid_coordinates: [24, 71],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk15_plot_3: {
            grid_coordinates: [23, 39],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk15_plot_4: {
            grid_coordinates: [56, 1],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk15_plot_5: {
            grid_coordinates: [31, 71],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk15_plot_6: {
            grid_coordinates: [94, 48],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk15_plot_7: {
            grid_coordinates: [46, 77],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk15_plot_8: {
            grid_coordinates: [37, 22],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk15_plot_9: {
            grid_coordinates: [45, 31],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk15_plot_10: {
            grid_coordinates: [3, 6],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk15_plot_11: {
            grid_coordinates: [58, 60],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk15_plot_12: {
            grid_coordinates: [43, 53],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_16: {
        max_plots: 10,
        plots: {
          nph_blk16_plot_1: {
            grid_coordinates: [32, 10],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk16_plot_2: {
            grid_coordinates: [71, 76],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk16_plot_3: {
            grid_coordinates: [57, 83],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk16_plot_4: {
            grid_coordinates: [0, 36],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk16_plot_5: {
            grid_coordinates: [37, 98],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk16_plot_6: {
            grid_coordinates: [32, 64],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk16_plot_7: {
            grid_coordinates: [96, 94],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk16_plot_8: {
            grid_coordinates: [82, 48],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk16_plot_9: {
            grid_coordinates: [97, 96],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk16_plot_10: {
            grid_coordinates: [97, 58],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk16_plot_11: {
            grid_coordinates: [38, 53],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          nph_blk16_plot_12: {
            grid_coordinates: [43, 99],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          nph_blk16_plot_13: {
            grid_coordinates: [4, 59],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          nph_blk16_plot_14: {
            grid_coordinates: [57, 36],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
    },
  },
  phase_1: {
    max_blocks: 9,
    blocks: {
      block_1: {
        max_plots: 10,
        plots: {
          ph1_blk1_plot_1: {
            grid_coordinates: [38, 66],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk1_plot_2: {
            grid_coordinates: [80, 20],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk1_plot_3: {
            grid_coordinates: [75, 53],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk1_plot_4: {
            grid_coordinates: [14, 58],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk1_plot_5: {
            grid_coordinates: [0, 30],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk1_plot_6: {
            grid_coordinates: [77, 43],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk1_plot_7: {
            grid_coordinates: [81, 68],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk1_plot_8: {
            grid_coordinates: [43, 24],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_2: {
        max_plots: 10,
        plots: {
          ph1_blk2_plot_1: {
            grid_coordinates: [74, 8],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk2_plot_2: {
            grid_coordinates: [28, 95],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk2_plot_3: {
            grid_coordinates: [93, 50],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk2_plot_4: {
            grid_coordinates: [10, 84],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk2_plot_5: {
            grid_coordinates: [76, 47],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk2_plot_6: {
            grid_coordinates: [87, 75],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk2_plot_7: {
            grid_coordinates: [70, 31],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk2_plot_8: {
            grid_coordinates: [4, 30],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk2_plot_9: {
            grid_coordinates: [38, 67],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk2_plot_10: {
            grid_coordinates: [99, 98],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk2_plot_11: {
            grid_coordinates: [21, 55],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_3: {
        max_plots: 10,
        plots: {
          ph1_blk3_plot_1: {
            grid_coordinates: [79, 47],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk3_plot_2: {
            grid_coordinates: [94, 31],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk3_plot_3: {
            grid_coordinates: [5, 24],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk3_plot_4: {
            grid_coordinates: [70, 93],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk3_plot_5: {
            grid_coordinates: [92, 46],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk3_plot_6: {
            grid_coordinates: [7, 29],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk3_plot_7: {
            grid_coordinates: [52, 83],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk3_plot_8: {
            grid_coordinates: [64, 5],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk3_plot_9: {
            grid_coordinates: [61, 10],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_4: {
        max_plots: 10,
        plots: {
          ph1_blk4_plot_1: {
            grid_coordinates: [83, 93],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk4_plot_2: {
            grid_coordinates: [18, 80],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk4_plot_3: {
            grid_coordinates: [15, 66],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk4_plot_4: {
            grid_coordinates: [79, 50],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk4_plot_5: {
            grid_coordinates: [28, 65],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk4_plot_6: {
            grid_coordinates: [24, 44],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk4_plot_7: {
            grid_coordinates: [3, 51],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk4_plot_8: {
            grid_coordinates: [45, 11],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_5: {
        max_plots: 10,
        plots: {
          ph1_blk5_plot_1: {
            grid_coordinates: [45, 13],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk5_plot_2: {
            grid_coordinates: [61, 6],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk5_plot_3: {
            grid_coordinates: [43, 26],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk5_plot_4: {
            grid_coordinates: [19, 19],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk5_plot_5: {
            grid_coordinates: [3, 69],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk5_plot_6: {
            grid_coordinates: [56, 63],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk5_plot_7: {
            grid_coordinates: [77, 42],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk5_plot_8: {
            grid_coordinates: [51, 6],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk5_plot_9: {
            grid_coordinates: [16, 39],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk5_plot_10: {
            grid_coordinates: [8, 32],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk5_plot_11: {
            grid_coordinates: [66, 45],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk5_plot_12: {
            grid_coordinates: [27, 86],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk5_plot_13: {
            grid_coordinates: [86, 98],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk5_plot_14: {
            grid_coordinates: [10, 74],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk5_plot_15: {
            grid_coordinates: [97, 38],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
        },
      },
      block_6: {
        max_plots: 10,
        plots: {
          ph1_blk6_plot_1: {
            grid_coordinates: [84, 30],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk6_plot_2: {
            grid_coordinates: [99, 44],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk6_plot_3: {
            grid_coordinates: [25, 29],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk6_plot_4: {
            grid_coordinates: [58, 33],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk6_plot_5: {
            grid_coordinates: [73, 57],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk6_plot_6: {
            grid_coordinates: [40, 3],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk6_plot_7: {
            grid_coordinates: [13, 74],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk6_plot_8: {
            grid_coordinates: [69, 39],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk6_plot_9: {
            grid_coordinates: [41, 69],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk6_plot_10: {
            grid_coordinates: [64, 50],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk6_plot_11: {
            grid_coordinates: [72, 18],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_7: {
        max_plots: 10,
        plots: {
          ph1_blk7_plot_1: {
            grid_coordinates: [68, 63],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk7_plot_2: {
            grid_coordinates: [40, 80],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk7_plot_3: {
            grid_coordinates: [29, 37],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk7_plot_4: {
            grid_coordinates: [73, 24],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk7_plot_5: {
            grid_coordinates: [67, 37],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk7_plot_6: {
            grid_coordinates: [39, 18],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk7_plot_7: {
            grid_coordinates: [40, 28],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk7_plot_8: {
            grid_coordinates: [67, 19],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk7_plot_9: {
            grid_coordinates: [55, 58],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk7_plot_10: {
            grid_coordinates: [29, 2],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk7_plot_11: {
            grid_coordinates: [69, 91],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk7_plot_12: {
            grid_coordinates: [33, 46],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk7_plot_13: {
            grid_coordinates: [74, 88],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk7_plot_14: {
            grid_coordinates: [28, 67],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk7_plot_15: {
            grid_coordinates: [15, 73],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_8: {
        max_plots: 10,
        plots: {
          ph1_blk8_plot_1: {
            grid_coordinates: [90, 67],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk8_plot_2: {
            grid_coordinates: [95, 53],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk8_plot_3: {
            grid_coordinates: [32, 54],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk8_plot_4: {
            grid_coordinates: [74, 26],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk8_plot_5: {
            grid_coordinates: [61, 8],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk8_plot_6: {
            grid_coordinates: [80, 89],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk8_plot_7: {
            grid_coordinates: [38, 27],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk8_plot_8: {
            grid_coordinates: [48, 5],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_9: {
        max_plots: 10,
        plots: {
          ph1_blk9_plot_1: {
            grid_coordinates: [3, 23],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_2: {
            grid_coordinates: [8, 93],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_3: {
            grid_coordinates: [91, 22],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk9_plot_4: {
            grid_coordinates: [74, 77],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk9_plot_5: {
            grid_coordinates: [9, 89],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_6: {
            grid_coordinates: [46, 35],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_7: {
            grid_coordinates: [25, 0],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_8: {
            grid_coordinates: [88, 24],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_9: {
            grid_coordinates: [39, 26],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph1_blk9_plot_10: {
            grid_coordinates: [95, 70],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk9_plot_11: {
            grid_coordinates: [51, 44],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk9_plot_12: {
            grid_coordinates: [42, 68],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph1_blk9_plot_13: {
            grid_coordinates: [32, 95],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk9_plot_14: {
            grid_coordinates: [3, 53],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk9_plot_15: {
            grid_coordinates: [45, 42],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph1_blk9_plot_16: {
            grid_coordinates: [75, 82],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
    },
  },
  phase_2: {
    max_blocks: 6,
    blocks: {
      block_1: {
        max_plots: 10,
        plots: {
          ph2_blk1_plot_1: {
            grid_coordinates: [13, 80],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk1_plot_2: {
            grid_coordinates: [85, 95],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk1_plot_3: {
            grid_coordinates: [61, 88],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk1_plot_4: {
            grid_coordinates: [97, 83],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk1_plot_5: {
            grid_coordinates: [13, 98],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk1_plot_6: {
            grid_coordinates: [49, 64],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk1_plot_7: {
            grid_coordinates: [77, 45],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk1_plot_8: {
            grid_coordinates: [64, 32],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk1_plot_9: {
            grid_coordinates: [95, 72],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_2: {
        max_plots: 10,
        plots: {
          ph2_blk2_plot_1: {
            grid_coordinates: [60, 67],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_2: {
            grid_coordinates: [11, 14],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_3: {
            grid_coordinates: [11, 25],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk2_plot_4: {
            grid_coordinates: [63, 47],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk2_plot_5: {
            grid_coordinates: [54, 86],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk2_plot_6: {
            grid_coordinates: [70, 49],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_7: {
            grid_coordinates: [13, 13],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk2_plot_8: {
            grid_coordinates: [83, 71],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk2_plot_9: {
            grid_coordinates: [71, 94],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_10: {
            grid_coordinates: [33, 35],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_11: {
            grid_coordinates: [15, 47],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk2_plot_12: {
            grid_coordinates: [49, 37],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_13: {
            grid_coordinates: [52, 29],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk2_plot_14: {
            grid_coordinates: [11, 60],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk2_plot_15: {
            grid_coordinates: [0, 61],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_3: {
        max_plots: 10,
        plots: {
          ph2_blk3_plot_1: {
            grid_coordinates: [55, 33],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_2: {
            grid_coordinates: [29, 60],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_3: {
            grid_coordinates: [59, 98],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_4: {
            grid_coordinates: [99, 54],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_5: {
            grid_coordinates: [73, 58],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk3_plot_6: {
            grid_coordinates: [98, 66],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_7: {
            grid_coordinates: [59, 41],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk3_plot_8: {
            grid_coordinates: [78, 10],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk3_plot_9: {
            grid_coordinates: [5, 72],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk3_plot_10: {
            grid_coordinates: [50, 29],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_11: {
            grid_coordinates: [16, 88],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_12: {
            grid_coordinates: [46, 77],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk3_plot_13: {
            grid_coordinates: [70, 50],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_4: {
        max_plots: 10,
        plots: {
          ph2_blk4_plot_1: {
            grid_coordinates: [96, 49],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk4_plot_2: {
            grid_coordinates: [27, 17],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk4_plot_3: {
            grid_coordinates: [96, 16],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk4_plot_4: {
            grid_coordinates: [15, 76],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk4_plot_5: {
            grid_coordinates: [90, 97],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk4_plot_6: {
            grid_coordinates: [47, 65],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk4_plot_7: {
            grid_coordinates: [35, 14],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk4_plot_8: {
            grid_coordinates: [55, 52],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk4_plot_9: {
            grid_coordinates: [38, 64],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk4_plot_10: {
            grid_coordinates: [9, 65],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk4_plot_11: {
            grid_coordinates: [99, 5],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk4_plot_12: {
            grid_coordinates: [98, 91],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk4_plot_13: {
            grid_coordinates: [26, 11],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk4_plot_14: {
            grid_coordinates: [4, 51],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
        },
      },
      block_5: {
        max_plots: 10,
        plots: {
          ph2_blk5_plot_1: {
            grid_coordinates: [45, 91],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk5_plot_2: {
            grid_coordinates: [89, 2],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk5_plot_3: {
            grid_coordinates: [34, 60],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk5_plot_4: {
            grid_coordinates: [45, 1],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk5_plot_5: {
            grid_coordinates: [74, 9],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk5_plot_6: {
            grid_coordinates: [41, 39],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk5_plot_7: {
            grid_coordinates: [85, 90],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk5_plot_8: {
            grid_coordinates: [22, 25],
            status: "available",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk5_plot_9: {
            grid_coordinates: [11, 97],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk5_plot_10: {
            grid_coordinates: [47, 96],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk5_plot_11: {
            grid_coordinates: [36, 58],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk5_plot_12: {
            grid_coordinates: [67, 74],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
      block_6: {
        max_plots: 10,
        plots: {
          ph2_blk6_plot_1: {
            grid_coordinates: [2, 30],
            status: "available",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk6_plot_2: {
            grid_coordinates: [58, 36],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk6_plot_3: {
            grid_coordinates: [32, 75],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk6_plot_4: {
            grid_coordinates: [32, 46],
            status: "occupied",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk6_plot_5: {
            grid_coordinates: [28, 23],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk6_plot_6: {
            grid_coordinates: [36, 27],
            status: "occupied",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk6_plot_7: {
            grid_coordinates: [70, 69],
            status: "reserved",
            maintenance_status: "needs_care",
            owner_id: "",
          },
          ph2_blk6_plot_8: {
            grid_coordinates: [51, 40],
            status: "reserved",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk6_plot_9: {
            grid_coordinates: [44, 71],
            status: "occupied",
            maintenance_status: "good",
            owner_id: "",
          },
          ph2_blk6_plot_10: {
            grid_coordinates: [46, 13],
            status: "reserved",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
          ph2_blk6_plot_11: {
            grid_coordinates: [64, 75],
            status: "available",
            maintenance_status: "under_maintenance",
            owner_id: "",
          },
        },
      },
    },
  },
};
