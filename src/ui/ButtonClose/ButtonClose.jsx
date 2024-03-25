import css from "./ButtonClose.module.css";

export const ButtonClose = ({ onClick }) => {
    return (
        <>
            <button type="button" className={css.buttonClose} onClick={onClick}>
                <svg className={css.buttonCloseIcon}>
                    <use href="./icons/symbol-defs.svg#icon-close"></use>
                </svg>
            </button>
        </>
    );
};
