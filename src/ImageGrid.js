import GridLayout from "react-grid-layout";

function ImageGrid() {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2},
    { i: "b", x: 1, y: 0, w: 2, h: 2 },
    { i: "c", x: 2, y: 0, w: 3, h: 2 }
  ];

    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a"><img src="https://via.placeholder.com/150"/></div>
        <div key="b"><img src="https://via.placeholder.com/150"/></div>
        <div key="c"><img src="https://via.placeholder.com/150"/></div>
      </GridLayout>
  );
}

export default ImageGrid
