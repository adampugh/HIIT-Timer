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

const timeValues = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
                    "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
                    "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43",
                    "44", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53",
                    "54", "55", "56", "57", "58", "59"
]

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
                            <Field component="select" className="modal--edit__numberInput1" type="text" max="59" name="exerciseMinutes">
                                {timeValues.map(item => <option value={item}>{item}</option>)}
                            </Field>
                            :
                            <Field component="select" className="modal--edit__numberInput2" type="text" max="59" name="exerciseSeconds">
                                {timeValues.map(item => <option value={item}>{item}</option>)}
                            </Field>
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
                            <label htmlFor="switch">Toggle</label>
                        </div>
                    
                    { props.values.breakIncluded &&
                        <div className="exerciseGrid">
                            <div className="exerciseGrid__timeCol">
                                <label>Time</label>
                                <Field component="select" className="modal--edit__numberInput1" type="text" max="59" name="breakMinutes">
                                    {timeValues.map(item => <option value={item}>{item}</option>)}
                                </Field>
                                :
                                <Field component="select" className="modal--edit__numberInput2" type="text" max="59" name="breakSeconds">
                                    {timeValues.map(item => <option value={item}>{item}</option>)}
                                </Field>
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
            exerciseColor: "#40b3e1",
            breakIncluded: true,
            breakName: "Break",
            breakMinutes: 0,
            breakSeconds: 0,
            breakColor: "#b145fe"
        }
    },
    handleSubmit(values) {
        console.log(values);
    }
})(editModal);

export default formikEditModal;