namespace egret_plus.StateMachine {
    /**
     * 状态机的状态
     */
    export class State {
        /**
         * 进入状态时调用
         */
        public onEnterState(): void { };

        /**
         * 脱离状态时调用
         */
        public onExitState(): void { };
    }

    let _state: State | null = null;

    /**
     * 改变当前的状态
     * @param state 状态
     */
    export function changeState(state: State): void {
        if (_state) {
            _state.onExitState();
        }
        _state = state;
        if (_state) {
            state.onEnterState();
        }
    };
}