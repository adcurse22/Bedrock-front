import { getNodePositionWithOrigin } from "@reactflow/core";
import axios from "axios";

// Data in backend, here is mock data
export const MOCK_DATA = {
    "edges": [
        { "prev_a": 1, "curr_a": 4 },
        { "prev_a": 1, "curr_a": 2 },
        { "prev_a": 1, "curr_a": 3 },
        { "prev_a": 2, "curr_a": 6 },
        { "prev_a": 4, "curr_a": 7 },
        { "prev_a": 7, "curr_a": 8 }
    ],
    "nodes": [
        { "text": "A", "id": 1 },
        { "text": "D", "id": 4 },
        { "text": "B", "id": 2 },
        { "text": "C", "id": 3 },
        { "text": "F", "id": 6 },
        { "text": "E", "id": 7 },
        { "text": "G", "id": 8 }
    ]
}


// Format data from backend
export function getNodes() {
    // Fetcing data from backend
    // const res = await axios.get('backend link');

    // Formatting data
    const initialNodes = MOCK_DATA['nodes'].map((item, index) => {
        return {
            id: `${item.id}`,
            position: {
                x: 0,
                y: index * 100
            },
            data: {
                label: `${item.id}${item.text}`
            },
        }
    });
    const initialEdges = MOCK_DATA['edges'].map((item, index) => {
        return {
            id: `e${item.prev_a}-${item.curr_a}`,
            source: `${item.prev_a}`,
            target: `${item.curr_a}`
        }
    });
    return {
        initialEdges,
        initialNodes
    }
}