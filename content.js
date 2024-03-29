;(() => {
  if (window.__loadedContent) return

  window.__loadedContent = true

  const AUDIO_PISTOL = "data:audio/mpeg;base64,UklGRkEWAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YR0WAAB+fn5+fn5+fn5+fn5+fn5+fn19fFolEgAAAAAEI3b///vgxsSytKusn5+abBh1vS9W1aydl1qLnis7SVRZXF1MUlVcXmBkYmJmampsa2xwb3JxcnV1lv/w1c3Cw7q5s7CqqqWkoqOenZmbmZaVlpOUkI2Njo6NiYqKiYmKhYaGg4SAc11kkIZqAgAGHS0sLj1bLT5ER05PVFNVWl1dYWJjZWpzm9/JoauIo8WwlnRMS1deaGl+kHdrYWZ0i4VzZHSPiGxtdXZ5eXl9gHuAf4GGv/7SuYdnbYGOfZmZz/zD0dfGhGB1j/95YL6FpNXZvXb/dqwhpR2kPfiS9nPWrcV2nIX1t7t6lle+tqF1uJybcDUEFyAnLTUjQDZONDIzREU/VVxjbH2Jc2J3xqeVkI+MrrKy4KutmICOSlpqZWmdfl1aT0lFUFU4Y29jbXZlm97v0cKlV3CzmWBlam1yd3prcXKgqF9xZWhWAGClV4p2agARRK6UaQMkfqyei49/JlRFNG2OtrS56vHAuceqZGRdZGUwZ4dbTV2dooSWnH55e4+WkGFsdMuxnsHVwHpZiKKNXTtER2lta2h9fIGVZ4jZfIOCqJ/LqaW4spxtgCYlHixHVUlzfZqGY2yCp5xEQmirtLaOYUOQu5ieQENNZGtWrrvPtbfBm4mAkNDTsYpbQClGfo6JhYGBgHCkUYaMjH2CiJSijo9fdnA5WGBPcGpaYXBsbHixeGRMS2qexNKgWXOiirDPpZuWlamJnZOrqYxpOWNTcmdpYl5iWGhqz7ekc05opnRUSD9gaGdQK2E9X39nV26VprLGv5qnppKKkIGGcoeVmpGSkHieh4qMRTIvPFxdPUFUUWByYFdbYGtSU3V3apS+zbKGtc+8uLSNv6mBeZN6amhTak5MVnJpq7KUYI1uqHVodHKLi5WIprSehIAkpo2HY2p2gWJMV1FNW15idKqNoqqCjZagrqiqupaThoCct6+bg3Nme5Ogio6dgoOMqK54LyVIYF5MOi0qP0BjWkl1g3p+iEpOX1hLTj5ZYYCcZ2Bzn8S4pJCjqa6ufZGfobiUiqWnrI+Wl5a8fpmZgaF7r6ehuLGmnauim3xwHhg9X2dOTmOEy7qWm3iul3lndXR7kH93W3KIjYZncHBZT09DXUdPaF5hc5V1XpKAgmNPU2NqcWSMlGZhYI6hgWt3fYp+gZWUlH2Pmaaym67FytK7qI93nqufinh3e2GVcHR+c3WIfY57hZWCoph3i2pzemdnVlFWSk9PT2N0dHh1goyUh5iBdYeRiHNZYVpjZniLe313c5+sxbaXl56PnnthaHCEZmR3bmZtdHFxq56PnoufpJ+Ogo6LmIh3apWfkX6LpHhMSTVhemtrTUJMbX2YkYqEgIeRe36HhXVeSUdTW1lbY1dbW2iFdXhmbWh6cGdmYHRWW1FrcIKSkpfGubCzwrOfv6+VmI99fXVnZndnWnBubXBqZHeEdICEfm1dXVleWlthWlpZWmhwd36AjJ6wsKSeu7O9s56UlZiZgYGBgZWFi4eFhHVxdXVxXnd1cHB0dHB4c2h4cWZjYXN3gYWCcXdtdIyAjIBbWk9gc2twiIuPhGuHlJ6/lYV1dX2Hjn5gN1ZtioRhQoWFlZmbfbC9r6yuqZSEcF5weGhaP0dUVGNhWlFPU3WYtaakl5SZmIWBipKOgISUj4pnW3eIe4SLcVtnY4KHcGRxZmtqbX5xdHBzdYCPjo+LdXGIgouAeH5+gWt0iHqLbmdjY2BjXnV9dICKipube3OIh5mVdHFmjqKZoY+kuK+UhZ+1uJeUjqSfj3twl31wWl50ZlFXaIB1YVpmeHh+foWLfn2Ri5KEenFeWl5kdXF1eoCPfoWHjoh0ampjgn2or5+kl6u4wsnItbCch3RwUUpDP0RMU15kZGFhbXNudWRhaniSi4uEkay1vbispKSpqKKfmY+LgHhxcXBudWhjc2R7e3F4d3Bwa3NxdG5zcGpmY2d4gYyVnKuZmZmYj4iEiJmssLCrlYqFjoSEcGReWmFnZF5UR09ZZnFuZHV4gIuUm5GZoqyljoeVi4yVfY6KioF4eoWFgX1zgIeCj4iVmZKKemhgbXV4e3t0al1bbWttamhrcXRqbXSEmJufop+kmZmhl4x6foBubWdmeHN0dH2Lin5zamdqbmRhZ2R1fnhtZHqVj46OlI6KipKYi46MhIt7dYKHlZGPjId+cGtwamNWWU1TXltdTV1mfoCIjpuioZuUjJuipKielY+MjoiLioWMh32Mj5Kcl4+FgYV4cWZqYV5aXmdqbWBJTGFud25xbnd9h4uKkYp6d36Eh4yCdXV+eH2Fgn6CfYiKgYKBd32Ah4iBfn1zd313hZSblZGOlZ6bm5SSno9+d3N+e3hoZmt0fouLioyFgYF0cWthY2BaV1dgZ3VxbnF3a21zeH6LjoB0eISFkpGMkYSRm4V7foGCgXePn6KFdHCEl4hxZmuHgGRZVmR1al5WY211gIiHgnVwe32CdXWFjIB3epSXn5iHjpiZlZeXh4d+eniKkpGHe3R3gYyKe3txWllkYWRWWXOBjo96bW16j5eMfXV1gJepnpKLdWh3h4KLgWt1i5+plZeijHuBa3eHhHRza3t9dWZzfpmSiGhhWV1mfYGFioJ7h5WPhIR+fYeLjIeFiH57dXqAjoB0c3NgW1tuc2tnW1luen50ZmBmZ25uW1p0j4qKe2d9lY+KkYuFgoiAjo57a32IjpKUlZWHhY6Vm5mZmId6e36LoqSVh3dweoCOnJ6ZlIuHe3p0eHVrY2hbaoGBdGZQVGd0dW5nYGRre3RmZGt4hYJxdIeAgYSMl4WCgX2EkpSPgl1RaGt+va+eu7izrqimpJ+Zh3twZ1pRR0M/P0JJUVBNXX2Il5yUjoWAbmRkbXR3dHdnXWFti5+utbKzsK+rqaihm5mXmIuFgoiRj46EaGZtaF1dUU1PUVRZYGFeYWRkamhqaGdueoiLioF+iJKlpqKiqKihnJSCenuAgoB9d3FtZ2dkbXqFh4qFhY6Xn6WhnJyRhHhzdX16c3N3c3R7eHp4d251fYGEhHFdXmduc3FubnF4gH2Ch4uMj5SOgnt0cXd9cGdoYV5kY3B+fn59d3F6eH2Mjo6OlJmcnpyUh46HhISBh4qFjIyFhIqEem5hZGpoZmdgVlRXaHV4fnFjY251hIuSiHh4hIeFi4yOio6HgYeOi4WAe3uEjpGKlZSEe4SCio6Abmpze3h1eH2FhYKFfn6LioWBend1entxfoSHi4l/dHBxd4CFhH98eHV1dnZ6fHt7e3h3dnp9foCGjpWXl5KHfnh7gIOBgXlyc3p9fnt2cW9tb3FxcHBwdnp5cWdfWVtjbnh/g4WIiY2PkJKVmJmXmZiXlZWXlI6Kh4WGioyPkpKSkI+Oi4iIiYmFgHhvamNbUk5IQ0FCREZISktMTlZfa3R6fn9/gYaIiI6WmJmeprG3s7KwrKmlnJOLiYiJiIN9eHFqZWVkZWhrbnFzc29vcXZ9gYWJjI2Pj42Li42PkI+OkJSUk5GQjo2Hf3t5dnp9fXt5enx7e36AgH+Af3l1dnZ2d3d3c3FwbWxua2ViX1ZYXmZvd3x8eXZ1dHFzd3p5fYKHio2MiomHg4GDhYqNjIyKiIqNjo6MioWEhIWKj4+Oi4iIiYmJh4WFhoeHh4WCf35/f356d3l5d3NwcG9vbmppaGpucXN0dXd3e3x+f4KEhIiJiYuOkI6NjYyFgICAfHx+f4CAf31/gH98eHR0dXd5eHd2dHFydHZ2eHx+gIOAfX6AfHh6gICBgHt0c3FxcnR3dXd+hIWFiIuKiYuQlJeanJ+jo6CbmZWMgoCAgIKBf3t3dHBrZF1TUFFZZHF7f398d3NwcXF0d3l9gomOjYmEf3x5e32AgIGEiZGUk5CMh4aFhISEhIODhoaGhoaFhYSFhIOBfnh2c3Bvbm5ubWlpbHFzcXBvb29ucHFwcHN5foCAfn5/gYCAfn9/gIeMj42JhYaKjY6QkpOTkpCRlJSSj4uJhoSDgYB8eXp5enx8end2dHV3eXh7gIWJjIqHg4KEiImHg4B9eHVycG1qampramdoaWpqaWtsa21yeHp6e32AhIiJioiEgoOGjZCOjIyNiYOAgIKHh4aCgH9/gISLkZWVkYyCe3h5e317dW9nZmhqbXBwb29ubXF0d3l8f4OIio6SlZaSjYaBfXt8gIODg4OAfnp2c3Z6fYCBgYOFhIOEg4KBgoB/f4CBhYWAfnl1c3Nzc3JwcHF2fICCgoB9eXd2eHZ2d3h8gISFh4iIi4uMi4qIhoWDgYF/gH18eXp9gYKBf318foCCgoOEiIyRlJeVko+Ojo6OjImJiIiGg355cnBvcHBtaGVhXFdVVFVaXF5eXV9iYmZpbnV8foCBgoWIi42Ni4mKi4uNjo2NjpCMh4SBfoCAgYGBg4iOkZCMhH55d3yEi5GQiYB9gYmQkIyHgX1+gIKDg4B9fH6BhoiGgoCAfX16dnFvbWxrbW1pZWJhYWBdXmBfXV1haXN7gICAgoaLlJmeoaOmqqyvsbCtqKWjoJ2bk4qEf3lybWZgW1dSUVBPTExJSEtQV11lbXR7gIOFiYmMjI2OkZOVlpaYmpmXlI6Hgn17eXp7fn5/gIB+f4CAgIGAgICAgIGEhoiLjIyLiYSBfnx6eHh3dHFxcnJycnBwbWxsbnFycXV6f4GCgH+AgICAg4eJiYWBfn1+goeJiYmFgoCBgoGBgH99f4GCgoKCgoGBgX9+fHt7enp5eHp5eHZ2dXRycXJ0dXh6enp8fn+AgIGBgYGAgICAgH59fX+AgIB/f3+AhIiKioiHhYOCgYGCgoKBf39/f398fHp6ent9f4B+e3p5en2BhYaHhHx0cnR4fX+Afnt7fH1/fnp0bm1sbnJ3eXp4eXl9gISHiouMjYyNjY6QkZKQjouJh4WDgoB/gH97dW9pZWRma29zdnVzcnNzdXl8foCChYaGiIiIioyOjo6QkZKQjIiFgoKAf315dXFuaWZmZmdoa2xramtucHN2d3d4fICChouLi4uLjI2Oj4+PkJCOjYyJhYOBgICAf4B/fHt6eXp7e3t6e3p3dXV1dXZ2eHl5ent8fX5/fn9/gICAg4SGh4iIhoSCgH9/fn5+f4CAgYGAf35+fn58e3x9fn9+gICBgYGAf316eHZ2dXR2d3l6eXl5e31+foCAgYGBgoKFiImIh4aFhISFhYODg4OCgoGAgICAgIGBgIB/f399fX19fX18e3p4eHl5eXl5enl5eXl3dnV0dHJzdXd3dnZ2dXZ3eHt+gIOGi46PkZKTk5KRjo2LiomIiIiIhoSDgoGAfHp2dXR0cXJxcnN1dHV0dHN0c3Z3d3d3dnd5e3t+fn9/gIKFhIOBgYCBg4WGiIiIh4iJioyLjIyJh4WDg4KCgoKBgH9+fX19e3p5eXl3d3Z1dHNzc3Fwb25tb3Bzdnl6e31/gIGCg4GAgISLkJOWlpSUlJGPjIqFgX9/fn+AgIB/fHZxbm1ucHJzdHd6e3x7eXl3dnZ3eHl8fn9/gICBgoOEgoKEhYWIiYqLjIuJh4iKiomHhoOBgYB/fn56eHZ2dHV2dnV1dXV2eHt8fHt5eXl6fX5+fn18e3x7fH19fX+AgIGCg4KCgoKEhIWEhIODhIWGhoaFg4OCgYCAgIGAgICAgH56d3V1dXZ1dXR0dHZ4eXt9fn+AgIKDhYeHiIqKiouLjIqKiYmHhoSDgoGAf398eXZ1dHN0dXNwb2xramhpamtsbnBydHZ2d3h5ent8foCBg4SFh4qLjI2OjpCRkpGPjoyLiomIiIiGhYSDgoCAgH18fHx7eXh2dXJydHZ3eHt+f4CBgX98eHZ1dnh7fYCAgIB+fX5+fn5+fX1/gIKCgoGBgIB/fn5+f39/fn+Af3x6dnV2dnh7fH19fHt5eXl7fH6AgoKCg4OCgoSEhISCgH56eHp9f358e3yAhIiGgHx7fYCChIOBgYKEhYWFhIODhIaGhYSDgX9/gH+Af3t4d3d5enl7enp6enl5eHp6fHp6enp6fHx/f4B/gICAgICAgYCBgIB/fXt8fX58fHt7e3p6fH5+f4CAgICBgICBgYGCgoKChIWGhYKCg4ODgoKCgoKCgYKCgYGAgICAf39/fn18ent7enh3d3Z2dnd5e3x8e3t7fHt9f4B/fX59fXx7e3x9fHt6eXl7fHx9fXx9f4CAgICAgICBgoKCg4WFiIiJh4aGhYSFhoaGhoSBgIB/fn5/f39/gH9+f358fH19fX1/gICAf319fHx7eXh4d3h4d3Z1dXR1d3h4ent8fX19fX6AgICAgYOFh4mJiIeGh4iHhoWFhYODg4KAgH98fHx9fX19e3t6eXl4eHh5ent7enx8fX5+f39+fn5+fn5/f4CAgICAgICAgIGBgICAf35+fn5/gICAgYGBgYCAgIB/gH+AgICAgYB+fH1+f39/f35+fn5+fHt6enp7e3p6enp4d3Z2d3h6eXl5eXt8fH5+f35/gICBgoOEhISDg4SEhYSEg4KCgoGBgYGBgYCAgICAf35+fn19f39/gICAgH59fX18e3p7e3x8fX1/gICAgICAgICAgICAgIGDhIWEg4KBgYCBgICAgICAfnx8fHx9fXp4d3V1dnl6enp5eXp7fH1+fn5/gICBgICAgYKBgICAgICAgYCAf39+fn5+f4B/fn59fn+AgICAf4B/gICAfnx8fX5+f39/f39/f4CAgICAf318e3x9fn5/gICAgICBgIGAgYCAgYKDg4KCgYCAgICAgIB/f39+fn19fX18e3p5ent8fHx8fHx8fH19fn5+fn5/gIB/f39/gICAgICAgICBgYCAgH9+fn19f4B/gH9/f35+fn59fX5/gICBgYCAgICAgYKDgoGBgIGBgYCAgICAgICAgH99fHt7e3x8fHx8fH18fXx8fH1+fXx9fX5+fn5+fn+AgICAgICAgICBgIGAgYCAgICAgICAf4B/f4CAf39/f39/fn9+f319fX5+fn9+fn5+fn5/gICAgICAgICAgICAgICAgIGAgYCAgICAgH9/gH9/f39/f39+f319fX19fX5+fn5+fn5/fn9+f4CAgH+AgH9/f35/gICAgICAgICAgICAgIGAgYCBgICAgICAgICAgICAgICAgICAf39/f39/fn9+fX19fX18fXx8fHt8fX1+fHx7fX1+f4CAgICAgICAgICAgICAgICAgICAgIB/f4CAgICAgICAgICAgH9+f4CAf39/f39+f4CAgICAgICAf39/f3+AgICAgIB/f3+AgIB/f35/gICAf39/f35/gH9/f39/f35/fn9+f3+AgICAgIB/f39/f39/gICAgH9/f39/f35/f39/f36Af39/f35/fn9+f35/fn9+fn5/gH9/gICAgICAgICAgIGAgH+AgICAgICAgICAf4CAgICAgH9/f39/f39/f39/fn9+f35/fn9+f35/fn9+f35/fn5+fn5+fn5+fn5+fn5+fn4="
  const AUDIO_RELOAD = "data:audio/mpeg;base64,UklGRhcXAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YfMWAAB9fX19fX19fX19fX19fX19fX19gIB9fX19fYCAfX2AfX19fX2AfX19fX2AgH2AgH19gICAgIB9fX2AgH19fX2AgH19fX19fX19gIB9fX19fX19gH19fYB9fX19fYB9aoqdXXp9cLNmY5B6fX2Ddo2AXYaNfXp2g3p2jYZ9doaDan2DgICKgG2AjX1zfYaAgHZzhoN6hnp2fYqGbXaQg3N6g4qAcICNgHqDg3qAenaDhnp9fXaGg3qAg316fX19eoCAfYCAgHp9g3p2gIOGfX2GdnN9gIN2c4CAhoN2c32Dg4Z9cH2Gg312gIZ6g4B6gHp2fYaDgIN6dnp9gIODfYB6cHqKgHB2g319hoCDbXqdemp6fYp9Onqtg4Z6YICTY2qmjWZ2ioqWdnONjYqKY3CqkF1ag6OdXWaqc3ONY32NcHB2fZaAdm1tkHBzk3NzkIZ2bXOGg3N9k5B2c312en1zg4Z9enZ9ioN9fXp9hoZwaoCQlnptfYCKgH2KfXNweo2NdnODg4OAfX12fYODfYaAc4Z6eoaAgIODfYCDgHp2enp9fXqDg4B6fX2Dg3qAhnp2fX2AgH19gIZ9fYN9eoCDenqAdnaDhoOAfX2DgH2Aen2DgH19fX2GhoCGfXqDfXp9gH19fYCAgICAg4N9eoB9en2AfYCDfX2AfYCGdn2Den2DdnqDenqDfYCAfYCAdnp9fX2AfX19gH16enqAgIB9en2AfXp9gIN9fX2Ag316fYCAgH2AgICDgH19fX2AfX2AenqGgHZ9fX2AfYCAgH19gH19fXqDgHp9g4Z6eoCAfYCAfYB9fYB9gIB9fX2AgIB9gIB9gICAgH2Ag4B9fYCAgIB9fYCAfYCAfYB9gIB9gICAgH2AgHqAfX19fYCAfX19fX2AfYB9c4OGen16eoCAgHp9fXp9gICAen2Aen2DfX19fYCAfXqAgH19fX2AgHZ6g4B9dnqNg3B2hoN9c4N6eoZzdpCGcHqAg3qAhnZ6fYODfXpzg416bYCGin1qhoZwg4B9g3Z9hnp9gH19fXp9hn16g3Z6hn19gH2Aen2DenaGg3N6fX2DhnpzgIOAfXqAg316fYCAfYCAfX2AgH2Ag319gH19gH19fX2AdoCKc3aNhnpzc4ONg2qDdoCTemqDjXp6g316gICAen2DeoaAc4CAenqAg32AgIB9fYB2eoN9doODdoCDgIN6eoCGenaDfXp9hoN9gH16g4B6g4N2eoODfXp6fYaDc3p9fYN9dnqAgHZ9g319g4B9fXp9en2AenZ9g319g316g4aDgHZ6gH19dnqAgH2AfYCAen19enaAfX2AenqAgH16gIB6gIN6en19fYOAc3qGgH2AgH16fYCAfYB9dn2AgIB6fYCAg316gH19fYCDfX2AgICDgH19fYCAen19gIBwipBzc4ONg3ZqepOAdnaDg3aDhoNzbYaQgHNzioOGfXOGgHqDg319g4CAfYOGenaDhoCAeoqDeoqWcFaanZaAfYNzam2gkG1ac6aQgIaDZmZ2dn2Kg3aNinp6bY1DE4NWIE1QirBmSppTMLp9U2aqxpCQWo2mepNmncqqelCQplBWqlp6xj0qmlZKmioWkHagkDaWjZOzjV1mkIM6mtZtbUBq/dZWKiqg9uCwQHb2oD2Qoz2j7ZaKfVNTk512apqjk7BgXY2KoICDmpqAip2Ak5aQoEBKtqaKY3qKarCdcJaQkHpzjap2Vpq6c3a9hm2jjVaQkFOjoFpjWmaQipqDY6aWbX1NapqAan2delqAfW2GfXqahn1mc5BwaoCAdnZ2g31ggJBwfZZ6bZB6cGqAqnNjjZpzinNzloBqdopjY5B9Y42QfYNtZoBwg5NjepNdY3OGekONk32jfWCQkFNmkFZjk4NtbYaacFp6anZzeoNzgHqDkG1wWm2GfXOAhoBmcKpzYIp9ZnqKgHZ6gGZqc3qAeo19fYZ6g4BmdoZtY42afXN6Y2aNmnpaepNzdop6fXptdnOWlmpwdnOGgHN6bYaKepNwc312gIB6hoN6g3Zten2Ahn1weoODioB9dmqDgHZ6fZCAaoaDcI2AU3OTloBzfY1zc3ptk4p2nZBwfYBdepB6gH16eoOQfXNzepCKgHqGgHZ2fYN9dnOAg4CKjX12c4N9cIN2dpN6gJNwfXNtioB9g4B6jYBwg3B2kIZ6fYN6gIB2dnOAenaNin19hnpwg4ZwcIaAgIZ9hn12g3N6kIOAhnaAhnp2fX2Dg4CNgHaAfX19ioB6eoaNdn2KeoOKfXZ6fYOAfZCDenpwhop2fYCGioBzeoN9gIOKhnqAgICAc4CAeoOKg3Z9g316g4N2fYN9gIaAhoB2gIOAgH2DgIODdoqDc319gIOGen2GgICAdn2Gg3qAioCDdnN9en19ioN2hn16hnp9gH2GfYCDgH16fYB9fYB9fYOGg4B2doOAfX19hoOAfXp9fYB9eoOAfXp9hoN6fYB9g4Z9fYOGgH2AfXp9hn2AioB2fYN6fX2GfYCGfXqDgHaAfYCKgIaDfYB6eoN9fYODeoB9eoN9en19gIN9gIaAenp9gH19g4ODg4B9fX2AenqDg4CAfYCAfXqAfYCAgIaAgIB2doN9eoOAg4B6gIB9enp9en2DgH2Ag4B9en19gIB9gIB9fYCAfX19fYCDgH19fYB9fX19gICAfX2AgHqAgH2Ag3p9g4N9en16fYN9fYCAgH19gH19gIB6fYOAfYCAfX19gICAfX2Ag319gH19fXqAgICAenqAfX16fYB9gH2AfX2DenqDfYCAfYCAfXp9fX19fYCAfX19eoB9en19fYB9fYB9fYB9fX19fYCAgIB9fYB6fX16gIOAgIB9fYCAfXqAg4CAgH19fX16gIN9gIB9gH16fXp2eoCAgICAenqAen2AfX19gH19gH12fX19gICAfXqAgH19fXp9gICAfYB9fX19fXqAgICAgH19fX19fX2Ag4CAgH19fX19fYCAgICAgIB9en19fYCAgICAgH19fX19fYCDgIB9fX19enp9gICAgIB9fX16fX19fYCAgH19fXp9fX19gIB9fX2Aenp9fX19gIB9gIB9fX19en19gIOAfYB9fX19fYCAgIB9fX19fX19fX2AfX2AfX19en19fYB9gIB9fX19fXp9gH2AgICAfX19fX19gICAgICAfX19fX19fYCAgH19fX19fX19fYCAgIB9fX19fX19gICAgH19fX19fX2AgICAfX19fX19fX2AgICAfX19fX19gIB9gIB9fX19fXp9fX2AgH19fXp9fX19fYCAfYCAfXp9fX19gICAgIB9fX19fX19gICAgIB9fX19fYB9gICAgIB9fX19fYCAgICAgH19fX19fX19gICAgH19fX19fX2AgICAfX19fX19fX2AgH19fX19fX19gIB9gIB9fX19fX19fYCAgIB9fX19fX19gICAgIB9fX19fX2AgH2AgH19fX19fX2AgICAgH19fX19fX2AfYCAfX19fX19gICAgICAgH19fX19fYCAgICAfX19fX19gICAgIB9fX19fX19gICAgICAfX19fX2AgICAgH19fX19fYCAgICAgH19fX19fX2AgICAgH19fX19fYCAfYCAfX19fX19fX2AgH19fX19fX19fX19fX19fX19fX19fX19fYCAfX19fX19fYCAgIB9fX19fX19fYCAfX19fX19fX19gICAgH19fX19fYCAfYCAfX19fX19gICAgICAgH19fX2AgICAgICAfX19fX19gICAgIB9fX19fX2AgICAgIB9fX19fYCAgICAgH19fX19fYCAgICAgIB9fX19gICAgICAfX19fX19fYCAgICAfX19fX19gICAgIB9fX19fX19gICAgH19fX19fX19gICAgH19fX19fYCAgICAgH19fX19fYCAgICAfX19fX19fX19fX19fX19fX19fX2AgIB9fX19fX19fYCAgIB9fX19fX19gICAgH19fX19fX19gICAgH19fX19fX19gICAgIB9fX19fYCAgICAgICAfX19gICAgICAgIB9fX19gICAgICAgH19fX2AgICAgICAfX19fX2AgICAgICAfX19fX19gICAgIB9fX19fX2AgICAgICAgH19gICAgICAgICAgH19fYCAgICAgH19fX19fX2AgIB9fX19fX19fX19fX19fX19fX19fX19gH19fX19fX19fYCAgH19fX19fX19gICAgIB9fX2AgICAgICAgH19fX19fX2AfX19fX19fX19fX2AgIB9fX19fX2AgICAfX19gIB9fX2AgICAfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX2AgH19fX19fX2AgH2AgICAfX2AfX19fX19fYCAfX19fYCAfX19fX19fX19fYCAfX19fX19fX19fYB9fX19fX19fX19fX2AgH19fX19fX19gICAgICAfX19fX2AgICAgICAfX19fYCAgICAgICAfX19fX2AgH2AgH19gH19fX19gIB9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19gH19gH19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX2AgIB9fX19gH19gICAgICAgICAgH19fYCAgH19gICAgH2AgIB9fX19fX19fX2AfX19fX19fX19fX19fX19gIB9fYCAgH19fYCAfX19gH19gIB9gH19fX19fX19fX2AfX19gIB9fX19gH19fYODen12c4aKdoCAfYB6doCGenaAg4p2dn2Ahn2AgHp2eoaGenZ2g4aAfXaDhoB2c4CDgIB9en2Kg3Z9fX2DgHp6g4N6en19g4OQlpCDjYaDgFpzg2NaYHpwfZOWjWpTXaCtdnBtanqTmoNwan2KbWqDg4aNfYCdg3aNfXNqfYZ6lpB2fX19gIBtc5CGioB2io2GbWaQnXNqdoOWkHODhm2Kg216ho16gH1zeoODc4CDfYB6gIB2cH19doOAc3aAeoCAfX2DfXZ9enBzgIqDgH12fXqAg4B6gIB2gIqAdn2DfXaGdm2Qg3aWdmOQdn2Kio2AYIN9eop9fW2WelOmqkCThg2j1kZzvUCA0EZds2pqgIq9mnCT04ZgSjaQmlpmdpqgkJaKRmO6gyNAoKOQfZCKlnNAg4NtZlp9k5BwgKaAfZZqUHp9XYaTbYqwc2CNfWpdfYaAoIZ9hn2AhnNmeoqDcH16fYqDgG1zloNjaoqDfYqGgHNqhpZ9anN2jY2Gin16anqKdoNqarpzYK19dn16dm19g32DgIaDkHpWnYNaio1QiqZNYI2mmmBzmmZwkIZzdnqNoHpweoCDbX2Qdn2ahoONcIOKZoOTenp6jYZ2gHpzg3aDjV12oIptbYOGinpqepCGc316fZCAc316eoOAhnp9hoCGg319enZ6gHp9g4CAfYaGdnCDinp9am2WkH2DenaNenODfXp6dnqKhnqDenqNfXODfYCKen2KgHqAgH16gICAg32DfXaAjYBzgIqDin1zg3p9g3p6fX16hopzgJN6c3p6hoN6gIB9doOWfXB2gIqDcIaKan2QenaDdnB9inpzgH2GgHODhnp2dnqAhn1zgIB9g3Nwg4CAfXB9jX12fXqAg316gH19gH19fYBzhpCAenqDgHqDfWCDnXp2g3p9hn12fYB6g4B9inp6jYNqfY1wg4p6fXaAhoZ6ZnN9ioCGfW2DioNzdoB6iopwc4CGkIZ2c3qAg4qGdnCGal2jjVqAnXp2fXB6pop2nY1qepBtXWCDpopTbbCgWmaWfYZ6TXaTgIpzZqOaZn2TinZzg3pjeoCDfWaTqm1jioaDenZ2doN2cIB9kI12hpOAfYB6cG2DfXBzg5CGg4aDfX1zc3pwcHZ6eoaNg32KioN9cHCGg3N6gHqGfXOGioCKhnZ9hoBwcH12eoB2eoqGg4aDfYODdnp9doCDdnp9fYN9dnqKk3ZwenZ9fZODZoaQgHNwfaONZmptanOThoaDY3ONmo19c316bW1tk5OGjXZwhoqAgG1mg42NgHN9fXp6nYNTcH2WinOGfX2TmoNweoaKalZwio1thp2AlppmcIBzempzenZ9epCQdn2DfYCDdnB9ioB9cHaNg3Z2gIB6gHp9in1wfYCAc4qaqt2mkFBagz0mfWAtbWM6TaCNo+aAE1qKgL2KZpBqZp2Ag5CNXTZzijZTYFp2fSZQ2nN93aptSiNWjcCdVqB9eqZ2Vqbjs6OdVqbdWm22XaP9qoCwyqaTdm2gmlOT0Gpws822lqqagIZdrbYmfeONjZqApnp2al2gTTY2EEBdRiBzSjaTQENqRlB9hm2GipDDk1rQ/3p2k0pq2n1mlnZmk4aW7ZZKkLBwc11KkJpwaqZ2ZpBKRkA6ioqqagB9ekB6WkBTXVqTmoB6SkO2nXaGWnCzs3CQhlqjtnCAlmCGjXZwg6ONdmZ2eoqgfXZwdkpts4OQrVqG4IpTk31mqqBdhpaKg2BGk9ZGVqBjc5qAc4pwc6CNgLB9YGZqgIZ2fZCTZnajdnBzc6B2bYBdg3p9kHpzdoN6fX16en2mfT2GpnN6loaKY3qNZnp2en12fW19gHqWpnNjnY1qfYZ2hn16kHNmioZ9nYNWcJZtVpaKapCKdqCQRnCQc4Z2aoCTfXCKdnaael19hnaTg22WjW1qjZZqg4Bjg3Zmg4Zqg5N6g319gIqDcH2NbXCafW2TgHqNdm12ho2DgHN2gHqKgG1zkIZthpBzfZZ2dpZ9apN9ZoZ2eo2Ac4qNdnaGg3qAeoCGfW2KhmOGhn2Qg3NzgHp2kHZtk4NzgIOKfX2AenOAioN6g3p2in2GdnOKeoaDcICDfYN2gIpwcIOAfYN9g4ODfXaGen2GfYN9gI16eoN9eoqNcHOKfX2DdoCDen2DinZzfXqGfXCAgHqDg3qDg3p9gIB6eoOAhoNwfYNzg4Zqdo19gIZ2fX2Ag32KhnOKgHCDfXqNg3qAc3qGen16eoOGinZzhoZ6doODeoOAen2Ahn19fYODeoOAdoZ9fX1zfYp6eoN9fXqDjXB2hn2DgHp6fYB6fYN6g4Z6fXp6gH16g316ioBwg319inpzhoB2fX19gIODeoCDdoCAdoCDfYCGeoOGdoCDfXqAg312fYOAeoODdoCDen2Den2GfXqDfXp9fYB9fYB6fYZ9fYN9fYB9enqDg32AgH19gIZ2doB9gH12eoB9eoB9fXp9gH2AfX2AfX2DgHp9gICAfYB9en2AgH2DfXqDfXaAg4B9gH16gICAgIB6gIZ6fX16gIOAeoCAgIZ9doOAeoCDen2DenZ9fYN9eoOAfYB9enqAgH2Ag3qAhn19g316gIB9gIN9fYN9eoCAfYB9fYN9fYCAfX2AgH2AgHqAgH2AgH19gH2DgHqAgIB9fXp9fYB9en19gIB9fX2AfXp9fX19fYB9en19en19fYB9en19fYCAfXp6gH19gHp9gH19fX2AfXp9gH19fX19gH19gIB6fYB9fX19gIB9fX19fX2Aen2AfX2AfYCAgH19gH19g316g4B9gIB9gH19g3p9gH2AfYCAfX19gH19gH2AfX2AgIB9fYB9fYCAfXqAgH2AfX2AfYCAen2AeoCAeoCAfYCAfX2AfXp9gH19gICAfX19fX19gHqAfXqAgH19fX19gH19gH19gH19gH19gIB6fYB9eoCAfYB9fYB9fX2AfYCAfX19fX19fX19fX19fX19fX19"
  const CURSOR = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🔫</text></svg>") 16 0,auto`

  const history = []

  let gunUp = false

  let target = null
  const clickarea = document.createElement("div")
  clickarea.id = "-doom-clickarea"
  clickarea.style.position = "fixed"
  clickarea.style.display = "none"
  clickarea.style.border = "2px dashed red"
  // clickarea.style.backgroundColor = 'rgba(128,128,128,0.5)'
  // clickarea.style.boxShadow = '0 0 1px 1px inset red'
  clickarea.style.pointerEvents = "none"
  clickarea.style.zIndex = 2147483647
  clickarea.style.cursor = CURSOR
  document.body.appendChild(clickarea)

  const a = new Audio(AUDIO_RELOAD)
  a.volume = 0.5;

  const setTarget = function setTarget(t) {
    if (target) {
      // before setting, reset change to previous target if any
      target.style.pointerEvents = ""
      target.style.cursor = ""
    }

    target = t
    if (!target) {
      clickarea.style.display = "none"
      return
    }

    const { top, left, width, height } = target.getBoundingClientRect()
    clickarea.style.top = `${top}px`
    clickarea.style.left = `${left}px`
    clickarea.style.width = `${width}px`
    clickarea.style.height = `${height}px`
    clickarea.style.display = "block"
  }
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0
  const shoot = () => {
    const a = new Audio(AUDIO_PISTOL)
    a.volume = 0.5;
    a.play();
    clickarea.style.display = "none"
    target.dataset.origStyle = target.getAttribute("style");
    target.setAttribute("style", `display:none !important`)
    history.push(target)
    // why did we need this...
    document.getSelection().removeAllRanges()
  }
  window.onkeydown = (e) => {
    const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey
    const combo = cmdOrCtrl && e.altKey

    if (!gunUp && combo) {
      a.play()
    }

    gunUp = combo
    if (gunUp) {
      document.documentElement.style.cursor = CURSOR
      overridePointerEventsCSS()
      setTarget([].slice.call(document.querySelectorAll(":hover")).pop())
    }

    if (e.code === "KeyZ" && cmdOrCtrl && history.length) {
      const el = history.pop()
      el.setAttribute("style", el.dataset.origStyle ?? "")
      el.dataset.origStyle = null

      // iframes need it to start recieve key events
      el.focus()
    }
  }

  function overridePointerEventsCSS() {
    const style = document.getElementById("-doom-ptr-ev") || document.createElement("style")
    style.id = "-doom-ptr-ev"
    style.innerHTML = "*:not(#-doom-clickarea) {pointer-events: initial !important;}"
    document.body.appendChild(style)
  }

  function restorePointerEventsCSS() {
    const style = document.getElementById("-doom-ptr-ev")
    if (style) {
      style.innerHTML = ""
    }
  }

  window.onkeyup = (e) => {
    gunUp = false
    restorePointerEventsCSS()
    document.documentElement.style.cursor = ""

    setTarget(null)
  }

  window.onmouseover = (e) => {
    if (!gunUp) return

    setTarget(e.target)
  }

  let forceScrollableSet = false

  const handleMouseup = (e) => {
    if (!gunUp) return
    if (!forceScrollableSet) {
      // sometimes break sites. buthuhm
      const style = document.getElementById("-doom-scroll") || document.createElement("style")
      style.id = "-doom-scroll"
      // make everything scrollable to fix paywall ...
      style.innerHTML = "* { overflow-y: initial !important; filter: none!important; }"
      document.head.appendChild(style)
      forceScrollableSet = true
      // if they put important we have to do this too.
      document.body.setAttribute("style", `${document.body.getAttribute("style") ?? ""}; overflow-y: initial !important`)
      document.documentElement.setAttribute("style", `${document.documentElement.getAttribute("style") ?? ""}; overflow-y: initial !important; position: initial !important`)
    }
    if (e) {
      // dont trigger a click on that thing.
      e.preventDefault && e.preventDefault()
      e.stopPropagation && e.stopPropagation()
      e.stopImmediatePropagation && e.stopImmediatePropagation()
    }

    if (!target) {
      setTarget(e.target)
    }

    if (target.nodeName === "HTML") {
      window.parent.postMessage({ msg: "shoot_iframe", location: location.href }, "*")
    } else {
      shoot()
    }
  }

  const preventClick = (e) => {
    if (!gunUp) return

    e.preventDefault && e.preventDefault()
    e.stopPropagation && e.stopPropagation()
    e.stopImmediatePropagation && e.stopImmediatePropagation()
  }


  window.addEventListener("mousedown", preventClick, true)
  window.addEventListener("click", preventClick, true)
  window.addEventListener("mouseup", handleMouseup, true)

  window.addEventListener("blur", _ => {
    // we've lost focus of the window put down the gun. keyup events wont be
    // captured.
    window.onkeyup({})
  })


  // handle an iframe. the event is captured inside the iframe, who cannot have
  // itself removed from the parent... window.close() does not work..
  window.addEventListener(
    "message",
    (e) => {
      if (e.data && e.data.msg === "shoot_iframe" && e.data.location) {
        gunUp = true
        // unfortunately we can't ctrl z it...
        setTarget(document.querySelector(`iframe[src="${e.data.location}"]`))
        shoot();
      }
    },
    false
  )
})()
