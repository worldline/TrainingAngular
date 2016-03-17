import {Component, View, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Typescript7'
})
@View({
	templateUrl:'src/components/slides/ecosystem/typescript7/typescript7.html',
	styleUrls: ['src/components/slides/ecosystem/typescript7/typescript7.css'],
    directives: [Editor, EditorTab]
})
export class Typescript7 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}