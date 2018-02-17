import React, { Component } from "react";
import Modal from "react-modal";
import { withFormik, Field, Form } from "formik";
import Yup from "yup";


const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      }
};

const editModal = (props) => (
    <Modal 
        isOpen={props.isOpen}
        contentLabel="add exercise modal"
        appElement={document.getElementById('root')} 
        onRequestClose={props.handleCloseModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal modal--edit"
    >
        <div className="modal__box">
            <div className="modal__header">
                <div></div>
                <div><h3>Add Exercise</h3></div>
                <div className="modal__close">
                    <h3>
                        <span onClick={props.handleCloseModal}>
                            <i className="fas fa-times"></i>
                        </span>
                    </h3>
                </div>
            </div>
            <hr />
            <div className="modal--edit">
                <Form>
                    <label>Name</label>
                    <Field type="text" maxLength="20" name="exerciseName" />
                    <div className="exerciseGrid">
                        <div className="exerciseGrid__timeCol">
                            <label>Time</label>
                            <Field className="modal--edit__numberInput1" type="number" max="60" name="exerciseMinutes" />
                            :
                            <Field className="modal--edit__numberInput2" type="number" max="59" name="exerciseSeconds" />
                        </div>
                        <div className="exerciseGrid__colorCol">
                            <label>Color</label>
                            <Field component="select" name="exerciseColor" style={{backgroundColor: props.values.exerciseColor}}>
                                <option value="#40b3e1"></option>
                                <option value="#acff82"></option>
                                <option value="#fedc45"></option>
                                <option value="#fec345"></option>
                                <option value="#fe6145"></option>
                                <option value="#b145fe"></option>
                            </Field>
                        </div>
                    </div>
                    
                        <div>
                            <label className="modal--edit__breakLabel">Break</label>
                        </div>
                        <div className="modal--edit__checkboxDiv">
                            <Field id="switch" className="modal--edit__checkbox" type="checkbox" name="breakIncluded" checked={props.values.breakIncluded} />
                            <label for="switch">Toggle</label>
                        </div>
                    
                    { props.values.breakIncluded &&
                        <div className="exerciseGrid">
                            <div className="exerciseGrid__timeCol">
                                <label>Time</label>
                                <Field className="modal--edit__numberInput1" type="number" max="60" name="breakMinutes" />
                                :
                                <Field className="modal--edit__numberInput2" type="number" max="59" name="breakSeconds" />
                            </div>
                            <div className="exerciseGrid__colorCol">
                                <label>Color</label>
                                <Field component="select" name="breakColor" style={{backgroundColor: props.values.breakColor}}>
                                    <option value="#40b3e1"></option>
                                    <option value="#acff82"></option>
                                    <option value="#fedc45"></option>
                                    <option value="#fec345"></option>
                                    <option value="#fe6145"></option>
                                    <option value="#b145fe"></option>
                                </Field>
                            </div>
                        </div>
                    }
                    <button className="modal__button">Add Exercise</button>
                </Form>
            </div>
        </div>
    </Modal>
);

const formikEditModal = withFormik({
    mapPropsToValues() {
        return {
            exerciseName: "",
            exerciseMinutes: 0,
            exerciseSeconds: 0,
            exerciseColor: "",
            breakIncluded: true,
            breakName: "Break",
            breakMinutes: 0,
            breakSeconds: 0,
            breakColor: "grey"
        }
    },
    handleSubmit(values) {
        console.log(values);
    }
})(editModal);

export default formikEditModal;
// <div className="modal--edit__breakInclude">
// <div>
//     <label className="modal--edit__breakLabel">Break</label>
// </div>
// <div className="modal--edit__checkboxDiv">
//     <Field id="switch" className="modal--edit__checkbox" type="checkbox" name="breakIncluded" checked={props.values.breakIncluded} />
//     <label for="switch">Toggle</label>
// </div>
// </div>