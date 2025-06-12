declare namespace SGDS.Component {
    namespace TaskList {
        interface Group extends React.AllHTMLAttributes<HTMLElement> {
            intro?: string,
            title: string
        }

        interface Task extends React.AllHTMLAttributes<HTMLElement> {
            href?: string,
            id?: string,
            isComplete?: boolean,
            statusText?: string,
            tagColour?: TagColour,
            title: string
        }
    }

    interface TaskList extends React.AllHTMLAttributes<HTMLElement> {
        headingId?: string
    }
}
