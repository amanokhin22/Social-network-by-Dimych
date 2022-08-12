import React from "react";
import styles from "./FormsControls.module.css"

// const FormControl = ({input, meta, children, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//                <div>
//                 {props.children}
//                </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
// export const Textarea = (props) => {
//     const {input, meta, children, ...restProps} = props;
//     return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
// }
// export const Input = (props) => {
//     const {input, meta, children, ...restProps} = props;
//     return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
//
// }

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {props.children}
            <div>
                {hasError && <span>{props.meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}
export const Input = (props) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}