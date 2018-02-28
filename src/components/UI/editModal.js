import React from "react";
import Modal from "react-modal";
import { withFormik, Field, Form } from "formik";
import Yup from "yup";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";

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
                    "44", "45", "46", "47", "48", "49", "50", "51", "52", "53",
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
                <div><h3 onClick={() => console.log(props.isValid)}>Add Exercise</h3></div>
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
                    { props.errors.exerciseName && <p className="modal--edit__error">{props.errors.exerciseName}</p>}

                    <div className="exerciseGrid">
                        <div className="exerciseGrid__timeCol">
                            <label>Time</label>
                            <Field component="select" className="modal--edit__numberInput1" type="text" max="59" name="exerciseMinutes">
                                {timeValues.map(item => <option key={`exerciseMin${item}`} value={item}>{item}</option>)}
                            </Field>
                            :
                            <Field component="select" className="modal--edit__numberInput2" type="text" max="59" name="exerciseSeconds">
                                {timeValues.map(item => <option key={`exerciseSec${item}`} value={item}>{item}</option>)}
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
                    
                    { props.errors.exerciseMinutes && <p className="modal--edit__error">{props.errors.exerciseMinutes}</p>}
                    { props.errors.exerciseSeconds && <p className="modal--edit__error">{props.errors.exerciseSeconds}</p>}
                    { props.errors.exerciseColor && <p className="modal--edit__error">{props.errors.exerciseColor}</p>}

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
                                    {timeValues.map(item => <option key={`breakMin${item}`} value={item}>{item}</option>)}
                                </Field>
                                :
                                <Field component="select" className="modal--edit__numberInput2" type="text" max="59" name="breakSeconds">
                                    {timeValues.map(item => <option key={`breakSec${item}`} value={item}>{item}</option>)}
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
                    <button disabled={!props.isValid} className="modal__button">Add Exercise</button>
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
    validationSchema: Yup.object().shape({
        exerciseName: Yup.string().required("Name is required"),
        exerciseMinutes: Yup.string().required("Minutes are required"),
        exerciseSeconds: Yup.string().required("Seconds are required"),
        exerciseColor: Yup.string().required("Please pick a color"),
        breakIncluded: Yup.boolean(),
        breakName: Yup.string(),
        breakMinutes: Yup.string(),
        breakSeconds: Yup.string(),
        breakColor: Yup.string()
    }),
    handleSubmit(values, {props}) {
        let exercise = {
            name: values.exerciseName,
            color: values.exerciseColor,
            time: (values.exerciseMinutes > 0 ? values.exerciseMinutes * 60 : "") + values.exerciseSeconds
        }
        if (values.breakIncluded) {
            let exerciseBreak = {
                name: values.breakName,
                color: values.breakColor,
                time: (values.breakMinutes > 0 ? values.breakMinutes * 60 : "") + values.breakSeconds
            }
            props.startAddExercise(exercise, props.workoutId);
            props.startAddExercise(exerciseBreak, props.workoutId);
        } else {
            props.startAddExercise(exercise, props.workoutId);
        }
        props.handleCloseModal();
    }
})(editModal);

const mapDispatchToProps = dispatch => {
    return {
        startAddExercise: (exercise, workoutId) => dispatch(actions.startAddExercise(exercise, workoutId))
    }
}

export default connect(null, mapDispatchToProps)(formikEditModal);