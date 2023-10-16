/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import * as d3 from 'd3';
import { useRef, useEffect, useState } from 'react';
import styles from './Graph.module.scss';

const NOTES = {
    nodes: [
        { x: 700, y: 1200, id: 0 },
        { x: 440, y: 300, id: 1 },
        { x: 260, y: 560, id: 2 }
    ],
    links: [
        { source: 0, target: 1 },
        { source: 1, target: 2 }
    ]
    // ... [your nodes and links NOTES]
};

export function Graph({ sidebarWidth = 0 }) {
    const ref = useRef(null);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [focusedDot, setFocusedDot] = useState(null);

    const handleResize = () => {
        setScreenHeight(window.innerHeight);
        const width = window.innerWidth;
        const height = window.innerHeight;
        d3.select(ref.current)
            .attr('viewBox', [-width / 2, -height / 2, width, height]);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Setting initial positions in a grid
    // NOTES.nodes.forEach((node, idx) => {
    //     node.x = (idx % 4) * 50 - 100; // 4 nodes per row, spaced 50 units apart
    //     node.y = Math.floor(idx / 4) * 50 - 100; // 4 rows, spaced 50 units apart
    // });
    console.log(NOTES);

    useEffect(() => {
        const svg = d3.select(ref.current);

        const simulation = d3.forceSimulation(NOTES.nodes)
            .force('link', d3.forceLink(NOTES.links).id((d) => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-200))
            .force('x', d3.forceX())
            .force('y', d3.forceY())
            .stop();

        for (let i = 0; i < 1; ++i) simulation.tick();

        svg.append('g')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .selectAll('line')
            .data(NOTES.links)
            .join('line')
            .attr('x1', (d) => d.source.x)
            .attr('y1', (d) => d.source.y)
            .attr('x2', (d) => d.target.x)
            .attr('y2', (d) => d.target.y);

        svg.append('g')
            .attr('stroke', '#fff')
            .attr('stroke-width', 1)
            .selectAll('circle')
            .data(NOTES.nodes)
            // .enter()
            // .append('Text')
            .join('circle')
            .attr('r', 40)
            .attr('fill', '#b2c3d4')
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .attr('style', 'cursor: pointer; width: 50px; height: 50px;')
            .on('click', (e, d) => {
                svg.selectAll('circle').classed('active', false);
                const clickedCircle = d3.select(e.currentTarget);
                clickedCircle.classed('active', !clickedCircle.classed('active'));
                setFocusedDot(focusedDot + 1);
            })
            .append('title')
            .text((d) => d.id);
        svg.append('g')
            .selectAll('text')
            .data(NOTES.nodes)
            .join('text')
            .text((d) => d.label)
            .attr('fill', '#000')
            .attr('x', (d) => d.x)
            .attr('y', (d) => d.y)
            .attr('dy', 5) // This offsets the label to be centered on the circle. Adjust as needed.
            .attr('text-anchor', 'middle') // This centers the text.
            .attr('font-size', '10px');
    }, []);

    return (
        <div className={styles.graph_holder} style={{ width: window.innerWidth - sidebarWidth }}>
            <svg ref={ref} style={{ width: '100%', height: screenHeight - 70 }} viewBox={`${-window.innerWidth / 2}, ${-window.innerHeight / 2}, ${window.innerHeight}, ${window.innerWidth}`} />
        </div>
    );
}
