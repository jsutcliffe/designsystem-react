declare namespace SGDS.Component {
    type FormMethods = 'GET' | 'POST';

    interface SiteSearch extends React.AllHTMLAttributes<HTMLInputElement> {
        action?: string,
        autocompleteEndpoint?: string,
        autocompleteSuggestionMappingFunction?: Function,
        id: string,
        method?: FormMethods,
        minLength?: number,
        name?: string,
        placeholder?: string
    }
}
