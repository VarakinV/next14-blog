import H1 from "./components/H1"

export function useMDXComponents(components) {
    return {
        h1: (props) => <H1 {...props} />,
        ...components,
    }
}