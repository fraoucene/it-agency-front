import * as React from 'react';

interface Props {
}

export const Technologies = ({}: Props) => {
    const technologies = [
        'php.png',
        'mysql.png',
        'dotnet.png',
        'zend.png',
        'symfony.png',
        'html-css.png',
        'jquery.png',
        'csharp.png',
        'xamarin.png',
        'telerik.png',
        'icon-cordova.png',
        'windows.png',
        'ios.png',
        'android.png',
        'azure.png',
        'sql_server.png',
        'drupal.png',
        'joomla.png',
        'wordpress.png',
        'prestashop.png'
    ];

    return <div className="row">
            <div className="col-sm-8" style={{marginLeft: '20%'}}>
                {technologies.map((tech: string, index) =>
                    <img key={index}
                         className="col-sm-2 techno-img animation"
                         src={require('../../theme/img/smartweb/' + tech)} alt={tech}/>)}
            </div>
    </div>;
};