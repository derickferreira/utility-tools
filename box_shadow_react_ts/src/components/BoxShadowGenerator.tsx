// hooks
import { useState, useEffect } from "react";

const BoxShadowGenerator = () => {
  const [horizontal, setHorizontal] = useState<number>(5);
  const [vertical, setVertical] = useState<number>(5);
  const [blur, setBlur] = useState<number>(5);
  const [spread, setSpread] = useState<number>(5);
  const [colour, setColour] = useState<string>("#000000");
  const [opacity, setOpacity] = useState<number>(0.5);
  const [inset, setInset] = useState<boolean>(false);
  const [colourBox, setColourBox] = useState<string>("#808080");
  const [boxShadow, setBoxShadow] = useState<string>("");

  useEffect(() => {
    const rgbaValue = hexToRgb(colour, opacity);
    const boxShadowValue = `${rgbaValue} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${
      inset ? "inset" : ""
    }`;
    console.log(opacity);
    console.log(boxShadow);
    setBoxShadow(boxShadowValue);
  }, [horizontal, vertical, blur, spread, colour, opacity, inset]);

  const hexToRgb = (hex: string, opacity: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div
      id="box_shadow_generator"
      className="p-6 bg-white rounded-lg shadow-md flex"
    >
      <div id="controls_container" className="space-y-4">
        <h2 className="text-lg">Box Shadow Settings</h2>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="horizontal">Horizontal displacement:</label>
            <input
              onChange={(event) => setHorizontal(parseInt(event.target.value))}
              value={horizontal}
              type="range"
              name="horizontal"
              id="horizontal"
              min="-75"
              max="100"
            />
          </div>
          <div className="reference_input">
            <input
              value={horizontal}
              type="text"
              name="horizontal_value"
              id="horizontal_value"
              readOnly
            />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="vertical">Vertical displacement:</label>
            <input
              onChange={(event) => setVertical(parseInt(event.target.value))}
              value={vertical}
              type="range"
              name="vertical"
              id="vertical"
              min="-75"
              max="100"
            />
          </div>
          <div className="reference_input">
            <input
              value={vertical}
              type="text"
              name="vertical_value"
              id="vertical_value"
              readOnly
            />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="blur">Blur:</label>
            <input
              onChange={(event) => setBlur(parseInt(event.target.value))}
              value={blur}
              type="range"
              name="blur"
              id="blur"
              min="0"
              max="100"
            />
          </div>
          <div className="reference_input">
            <input
              value={blur}
              type="text"
              name="blur_value"
              id="blur_value"
              readOnly
            />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="spread">Spread:</label>
            <input
              onChange={(event) => setSpread(parseInt(event.target.value))}
              value={spread}
              type="range"
              name="spread"
              id="spread"
              min="-75"
              max="100"
            />
          </div>
          <div className="reference_input">
            <input
              value={spread}
              type="text"
              name="spread_value"
              id="spread_value"
              readOnly
            />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="colour">Shadow colour:</label>
            <input
              onChange={(event) => setColour(event.target.value)}
              value={colour}
              type="color"
              name="colour"
              id="colour"
            />
          </div>
          <div className="reference_input">
            <input
              value={colour}
              type="text"
              name="colour_value"
              id="colour_value"
              readOnly
            />
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="opacity">Opacity:</label>
            <input
              onChange={(event) => setOpacity(parseFloat(event.target.value))}
              value={opacity}
              type="range"
              name="opacity"
              id="opacity"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
          <div className="reference_input">
            <input
              value={opacity}
              type="text"
              name="opacity_value"
              id="opacity_value"
              readOnly
            />
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="inset">inset shadow? (inset)</label>
            <input
              onChange={(event) => setInset(event.target.checked)}
              checked={inset}
              type="checkbox"
              name="inset"
              id="inset"
            />
          </div>
          <div className="reference_input">
            <input
              value={inset ? "with" : "without"}
              type="text"
              name="inset_value"
              id="inset_value"
              readOnly
            />
          </div>
        </div>
      </div>
      <div id="preview" className="flex flex-col items-center">
        <h2 className="text-xl">Preview of the generated effect:</h2>
        <div
          id="box"
          className="mt-6 w-32 h-32 rounded"
          style={{ boxShadow, backgroundColor: "" }}
        ></div>
      </div>
      <div
        id="generated_rule"
        className="mt-6 p-4 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-xl">Copy and Paste</h2>
        <div id="rules_area" className="mt-2">
          <div id="rule">
            box-shadow: <span>{boxShadow}</span>;
          </div>
          <div id="webkit_rule">
            -webkit-box-shadow: <span>{boxShadow}</span>;
          </div>
          <div id="moz_rule">
            -moz-box-shadow: <span>{boxShadow}</span>;
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
