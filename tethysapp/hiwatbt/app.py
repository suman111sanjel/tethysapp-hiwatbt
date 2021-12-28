from tethys_sdk.base import TethysAppBase, url_map_maker


class Hiwatbt(TethysAppBase):
    """
    Tethys app class for Hiwatbt.
    """

    name = 'HIWAT Extreme - Bhutan'
    index = 'hiwatbt:home'
    icon = 'hiwatbt/images/icon.gif'
    package = 'hiwatbt'
    root_url = 'hiwatbt'
    color = '#2980b9'
    description = ''
    tags = 'HIWAT'
    enable_feedback = False
    feedback_emails = []

    def url_maps(self):
        """
        Add controllers
        """
        UrlMap = url_map_maker(self.root_url)

        url_maps = (
            UrlMap(
                name='home',
                url='hiwatbt',
                controller='hiwatbt.controllers.home'
            ), UrlMap(
                name='getLatestHIWATInfo',
                url='hiwatbt/getLatestHIWATInfo',
                controller='hiwatbt.controllers.getLatestHIWATInfo'
            ),
        )

        return url_maps