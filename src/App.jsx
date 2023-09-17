import './App.scss';
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import { getNodes } from './constants/mockTree';

const CustomNode = ({ id }) => (
  <>
    <Handle type="target" position={Position.Left} />
    <div onClick={() => console.log('Node ID: ', id)}>{id}</div>
    <Handle type="source" position={Position.Right} />
  </>
);

const nodeTypes = {
  customnode: CustomNode,
};

// Getting nodes and edges
const initialNodes = getNodes().initialNodes;
const initialEdges = getNodes().initialEdges;

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => console.log(params));
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Rendering data */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={(e) => console.log(e)}
      />
    </div>
  )
}

export default App
