import React from 'react';

export const HowToPlay = ({ theme }) => {
    return (
        <div id="howToPlayModal" className="modal fade" tabIndex="-1" aria-labelledby="howToPlayLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className={`modal-content ${theme === "dark" ? "dark-color" : ""}`}>
                    <div className={`p-0 modal-body ${theme === "dark" ? "dark" : ""}`}>
                        <div className="px-5 pt-5">
                            <h2 className="text-sm text-left mb-1">How To Play</h2>
                            <br />
                            <p>
                                1. Connect your Wallet.<br />
                                2. Pick either rock, paper or scissors.<br />
                                3. Select your desired amount.<br />
                                4. Click “Double or Nothing”.<br />
                                5. Click approve and wait to see the the result.<br />
                                6. Congrats, you’re now a degenerate.<br />
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
