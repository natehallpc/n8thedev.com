import {StyleSheet, View} from 'react-native';
// 
function ConstructionNotice() {
    return (
        <div>
            <View
            style={[
                styles.container,
                {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'row',
                },
            ]}>
            <View style={{flex: 1, alignContent: 'center'}}>
                    <h1>Welcome</h1>
                    <h5>This site is under construction.</h5>
                    <h5>Check back for updates!</h5>
                </View>
            <View style={{flex: 1}} />
            </View>
        </div>
        );
}

const styles = StyleSheet.create({
    container: {
      height: 600,
      width: 1000,
      padding: 20,
    },
  });

export default ConstructionNotice;