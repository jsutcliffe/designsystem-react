declare namespace SGDS.Component {
    type QuestionTags = 'div' | 'fieldset';

    interface Question extends React.AllHTMLAttributes<HTMLElement> {
        error?: boolean,
        errorMessage?: string,
        hintText?: string,
        legend?: string,
        tagName: QuestionTags
    }
}
