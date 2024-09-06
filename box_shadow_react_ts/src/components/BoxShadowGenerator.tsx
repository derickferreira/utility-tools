// hooks
import { useState, useEffect } from "react";

const BoxShadowGenerator = () => {
  const [horizontal, setHorizontal] = useState(5);
  const [vertical, setVertical] = useState(5);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(5);
  const [colour, setColour] = useState("#000000");
  const [opacity, setOpacity] = useState(0.5);
  const [inset, setInset] = useState(false);
  const [boxShadow, setBoxShadow] = useState("");

  return (
    <div id="box_shadow_generator">
      <div id="controls_container">
        <h2 className="text-lg">Box Shadow Settings</h2>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="horizontal">Horizontal displacement:</label>
            <input
              type="range"
              name="horizontal"
              id="horizontal"
              min="-75"
              max="100"
            />
          </div>
          <div className="reference_input">
            <input
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
              type="range"
              name="vertical"
              id="vertical"
              min="-75"
              max="100"
            />
          </div>
          <div className="reference_input">
            <input
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
            <input type="range" name="blur" id="blur" min="-75" max="100" />
          </div>
          <div className="reference_input">
            <input type="text" name="blur_value" id="blur_value" readOnly />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="spread">Spread:</label>
            <input type="range" name="spread" id="spread" min="-75" max="100" />
          </div>
          <div className="reference_input">
            <input type="text" name="spread_value" id="spread_value" readOnly />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="colour">Colour:</label>
            <input type="color" name="colour" id="colour" />
          </div>
          <div className="reference_input">
            <input type="text" name="colour_value" id="colour_value" readOnly />
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="opacity">Opacity:</label>
            <input
              type="range"
              name="opacity"
              id="opacity"
              min="0"
              max="1"
              step={0.01}
            />
          </div>
          <div className="reference_input">
            <input
              type="text"
              name="opacity_value"
              id="opacity_value"
              readOnly
            />
            <p>px</p>
          </div>
        </div>
        <div className="form_control">
          <div className="range_input">
            <label htmlFor="inset">inset shadow? (inset)</label>
            <input type="range" name="inset" id="inset" min="-75" max="100" />
          </div>
          <div className="reference_input">
            <input type="text" name="inset_value" id="inset_value" readOnly />
            <p>px</p>
          </div>
        </div>
      </div>
      <div id="preview">
        <h2>Preview of the generated effect:</h2>
        <div id="box"></div>
      </div>
      <div id="generated_rule">
        <h2>Copy and Paste</h2>
        <div id="rules_area">
            <div id="rule">box-shadow: <span></span>;</div>
            <div id="webkit_rule">-webkit-box-shadow: <span></span>;</div>
            <div id="moz_rule">-moz-box-shadow: <span></span>;</div>
        </div>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;
