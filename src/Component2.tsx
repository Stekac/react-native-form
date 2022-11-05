import useFormData from "./react-native-form/useFormData";
import RerenderCounter from "./RerenderCounter";

const Component2 = () => {
    const data = useFormData('my-first')

    console.log('asdjakjksdjk');
    
    return (
    <div className="border p-2 m-2">
        <h3>Component2</h3>
        <RerenderCounter name="Component 2" />
        <pre>
            JSON
            {JSON.stringify(data, null, 2)}
        </pre>
        </div>
        );
}
 
export default Component2;