import { Injectable } from '@angular/core';
import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';

export interface Config {
  // Customize received credentials here
  firstTime: boolean;
  guideActive: boolean;
}

const configKey = 'config';

/**
 * Provides storage for authentication credentials.
 * The Config interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _config: Config | null = null;
  private ftConfig: Config = {
    firstTime: true,
    guideActive: true
  };

  constructor() {
    const savedConfig = sessionStorage.getItem(configKey) || localStorage.getItem(configKey);
    if (savedConfig) {
      this._config = JSON.parse(savedConfig);
    }
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isFirstTime(): boolean {
    return !!this.config;
  }

  /**
   * Gets the user config.
   * @return The user config or null if the user is not authenticated.
   */
  get config(): Config | null {
    return this._config;
  }

  /**
   * Sets the user config.
   * The config may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the config are only persisted for the current session.
   * @param config The user config.
   * @param remember True to remember config across sessions.
   */
  setConfig(config?: Config, remember?: boolean) {
    this._config = config || null;

    if (config) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(configKey, JSON.stringify(config));
    } else {
      sessionStorage.removeItem(configKey);
      localStorage.removeItem(configKey);
    }
  }

  setConfigFirst(remember?: boolean) {
    this._config = this.ftConfig;

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(configKey, JSON.stringify(this._config));
  }
}
