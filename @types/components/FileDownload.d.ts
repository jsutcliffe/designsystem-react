declare namespace SGDS.Component {
    interface FileDownload extends React.AllHTMLAttributes<HTMLElement> {
        cover?: string,
        icon?: DocumentIconName,
        fileSize?: string,
        fileType?: string,
        fileUrl: string,
        highlighted?: boolean,
        title: string
    }
}
