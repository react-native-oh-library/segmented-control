/*
 * Copyright (c) 2025 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

export const MSegmentedControl: React.FC = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const testIDS = ['btn-1', 'btn-2'];

  return (
    <View style={styles.container}>
      <SegmentedControl
        values={["One", "Two"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
        testIDS={testIDS}
        style={styles.segmentedControl}
      />
      <Text style={{marginTop: 20}}>
        当前选中 testID: {testIDS[selectedIndex]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  segmentedControl: {
    width: "60%", 
    height: 40,
  },
});

export default function PushAppDemo() {
    return <MSegmentedControl />;
}