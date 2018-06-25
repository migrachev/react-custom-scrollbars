export default function getSmartPropagationStopper(props) {
    return (event) => {
        if (event && props.stopClickPropagation) {
            event.stopPropagation();
        }
    };
}
