import React from 'react';
import styled from 'styled-components';

import Tree from '../components/Tree';

const Root = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #191b21;
  overflow: hidden;
  font-size: 14px;
  line-height: 21px;
`;

const IndexPage: React.FC = () => {
  return (
    <Root>
      <Tree name="main" defaultOpen>
        <Tree name="hello" />
        <Tree name="subtree with children">
          <Tree name="hello" />
          <Tree name="sub-subtree with children">
            <Tree name="Child 1" />
            <Tree name="Child 2" />
            <Tree name="Child 3" />
            <Tree name="custom content">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  padding: 10,
                }}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'black',
                    borderRadius: 5,
                  }}
                />
              </div>
            </Tree>
          </Tree>
          <Tree name="hello" />
        </Tree>
        <Tree name="world" />
        <Tree name={<span>something something</span>} />
      </Tree>
    </Root>
  );
};

export default IndexPage;