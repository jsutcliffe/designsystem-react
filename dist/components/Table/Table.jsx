"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const table_1 = __importDefault(require("@scottish-government/design-system/src/components/table/table"));
const clsx_1 = __importDefault(require("clsx"));
const Table = ({ children, className, smallscreen, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new table_1.default(ref.current).init();
        }
    }, [ref]);
    return (<table className={(0, clsx_1.default)([
            'ds_table',
            className
        ])} data-smallscreen={smallscreen} ref={ref} {...props}>
            {children}
        </table>);
};
Table.displayName = 'Table';
exports.default = Table;
