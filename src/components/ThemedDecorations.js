import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const themedChildren = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });

    return (
      <div>{themedChildren}</div>
    );
  }
}

export default ThemedDecorations;