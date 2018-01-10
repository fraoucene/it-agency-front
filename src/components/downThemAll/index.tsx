import * as React from 'react';

interface Props {
    readonly imagesUrl: string;
}

export class DownThemAll extends React.Component<Props, void> {

    downThemAll = () => {
        this.props.imagesUrl.split(',').map((a, index) => {
            const line = document.getElementById(index + '');
            if (line && a) {
                line.click();
            }
        });
    }

    render() {
        return (
            <div>
                <div className="btn btn-primary btn btn-block login-btn univ"
                    onClick={this.downThemAll}>DOWNTHEMALL</div>
                {this.props.imagesUrl.split(',')
                    .map((a, index) => <div key={index}><a id={index + ''} href={'http://' + a}
                         download>{a}</a></div>)}
             </div>
        );
    }
}
