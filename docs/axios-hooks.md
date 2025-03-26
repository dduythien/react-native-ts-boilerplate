# 🍾 [Axios Hooks](https://github.com/simoneb/axios-hooks) Usage Example

## Features

- All the [axios](https://github.com/axios/axios) awesomeness you are familiar with
- Zero configuration, but configurable if needed

```js
import { Text, TouchableOpacity, View } from "react-native";
import useAxios from "axios-hooks";

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    "https://reqres.in/api/users?delay=1",
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;

  return (
    <View>
      <TouchableOpacity onPress={refetch}>refetch</TouchableOpacity>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}
```

## Documentation

### API

- [useAxios](#useaxiosurlconfig-options)
- [configure](#configure-cache-axios-defaultoptions-)
- [serializeCache](#serializeCache)
- [loadCache](#loadcachecache)
- [makeUseAxios](#makeuseaxios-cache-axios-defaultoptions-)
