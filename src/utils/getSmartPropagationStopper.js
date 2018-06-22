export default function getSmartPropagationStopper(props) {
    return (event) => {
        if (props.stopClickPropagation) {
            event && event.stopPropagation();
        }
    };
}
