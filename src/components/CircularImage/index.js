import React from "react";
import PropTypes from "prop-types";
import { Segment } from "semantic-ui-react";

import styles from "./styles";

const CircularImage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Segment
        className={classes.circularImage}
        circular
        floated="left"
        size="small"
        style={{
          backgroundImage: `url(${props.src})`,
          width: props.width,
          height: props.height,
        }}
      />
    </div>
  );
};

CircularImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CircularImage.defaultProps = {
  src: "",
  width: 80,
  height: 80,
};

export default withStyles(styles)(CircularImage);
