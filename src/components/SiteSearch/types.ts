type FormMethods = 'GET' | 'POST';

export type Suggestion = {
    displayText: string;
    isActive: boolean;
}

export type SuggestionMappingFunctionProps = (suggestions: object[]) => Suggestion[];

export interface SiteSearchProps extends React.AllHTMLAttributes<HTMLInputElement> {
    action?: string;
    autocompleteEndpoint?: string;
    autocompleteSuggestionMappingFunction?: SuggestionMappingFunctionProps;
    id: string;
    method?: FormMethods;
    minLength?: number;
    name?: string;
    placeholder?: string;
}
