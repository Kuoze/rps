import React from 'react';

export const FAQ = ({theme}) => {
    return (
        <div id="faqModal" className="modal fade" tabIndex="-1" aria-labelledby="faqLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className={`modal-content ${theme === "dark" ? "dark-color" : ""}`}>
                    <div className={`modal-body ${theme === "dark" ? "dark" : ""}`}>
                        <div className="px-5 pt-5">
                            <h2 className="text-sm text-left mb-1">Frequntly Asked Questions</h2>
                            <br />
                            <h5 className="mb-0">What is Rock Paper Scissors (RPS)</h5>
                            <hr className='my-1'/>
                            <p className="mb-4">
                                Lorem ipsum
                            </p>
                            <h5 className="mb-0">What is Rock Paper Scissors (RPS)</h5>
                            <hr className='my-1'/>
                            <p className="mb-4">
                                Lorem ipsum
                            </p>
                            <h5 className="mb-0">What is Rock Paper Scissors (RPS)</h5>
                            <hr className='my-1'/>
                            <p className="mb-4">
                                Lorem ipsum
                            </p>
                            <h5 className="mb-0">What is Rock Paper Scissors (RPS)</h5>
                            <hr className='my-1'/>
                            <p className="mb-4">
                                Lorem ipsum
                            </p>
                        </div>

                    </div>
                    <div className={`modal-footer ${ theme === 'dark' ? 'dark' : ''}`}>
                        <button type="button" className="my-2 btn btn-lg w-100 btn-block btn-warning" data-bs-dismiss="modal">Got It</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
