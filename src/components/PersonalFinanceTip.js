import React from 'react';

export default class PersonalFinanceTip extends React.Component {
    render() {
        return (
            <div class="tap-target teal lighten-3" data-activates="mybtn">
                <div class="tap-target-content">
                    <h5>Available: 24/7</h5>
                    <p>Call us now to speak with someone about your matter.</p>
                    <a href="#!" onClick="$('.tap-target').tapTarget('close')">
                        Dismiss
                    </a>
                </div>
            </div>
        );
    }
}
