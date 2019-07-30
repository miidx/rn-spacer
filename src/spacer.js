import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  spacer: {
    height: 1,
    width: 1,
  },
};

const Spacer = ({ mode, length }) => {
  switch (mode) {
    case 'vertical': {
      return (
        <View style={[styles.spacer, { height: length }]} />
      );
    }
    case 'horizontal': {
      return (
        <View style={[styles.spacer, { width: length }]} />
      );
    }
    default: { return null; }
  }
};

export default Spacer;

Spacer.propTypes = {
  mode: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  length: PropTypes.number.isRequired,
};
