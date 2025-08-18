declare namespace SGDS.Component {
    namespace TaskList {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            intro?: string,
            title: string
        }

        interface Item extends React.AllHTMLAttributes<HTMLElement> {
            href?: string,
            id?: string,
            isComplete?: boolean,
            linkComponent?: SGDS.LinkComponent,
            statusText?: string,
            tagColour?: TagColour,
            title: string
        }
    }

    interface TaskList extends React.AllHTMLAttributes<HTMLElement> {
        headingId?: string
    }
}
