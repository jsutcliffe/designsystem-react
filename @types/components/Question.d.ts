declare namespace SGDS.Component {
    type QuestionTags = 'div' | 'fieldset';

    interface Question extends React.AllHTMLAttributes<HTMLElement> {
        errorMessage?: string,
        hasError?: boolean,
        hintText?: string,
        legend?: string,
        tagName: QuestionTags
    }
}
